'use client';

import axios, { AxiosError, AxiosInstance } from 'axios';
import { apiConfig } from '@/config/api.config';

type RefreshResponse = {
  accessToken: string;
};

function createHttpClient(): AxiosInstance {
  const instance = axios.create({
    baseURL: apiConfig.baseUrl,
    timeout: apiConfig.timeout,
    headers: { 'Content-Type': 'application/json' },
  });

  instance.interceptors.request.use(config => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('authToken');
      if (token) {
        config.headers = config.headers ?? {};
        config.headers.Authorization = `Bearer ${token}`;
      }
      // locale header (for backend localization)
      const locale = document.documentElement.lang || 'ar';
      if (config.headers) {
        config.headers['Accept-Language'] = locale;
      }
    }
    return config;
  });

  let isRefreshing = false;
  let pendingQueue: Array<(token: string | null) => void> = [];

  instance.interceptors.response.use(
    res => res,
    async (error: AxiosError) => {
      if (!error.config) {
        return Promise.reject({ message: 'Network error', cause: error });
      }
      const original = error.config as typeof error.config & {
        _retry?: boolean;
      };
      const status = error.response?.status;

      if (!status) {
        return Promise.reject({ message: 'Network error', cause: error });
      }

      if (status === 401 && !original._retry) {
        original._retry = true;

        if (isRefreshing) {
          const token = await new Promise<string | null>(resolve => {
            pendingQueue.push(resolve);
          });
          if (token) {
            original.headers = original.headers ?? {};
            original.headers.Authorization = `Bearer ${token}`;
          }
          return instance(original);
        }

        try {
          isRefreshing = true;
          const refreshToken =
            typeof window !== 'undefined'
              ? localStorage.getItem('refreshToken')
              : null;
          if (!refreshToken) throw new Error('No refresh token');

          const resp = await axios.post<RefreshResponse>(
            `${apiConfig.baseUrl}${apiConfig.endpoints.auth.refresh}`,
            { refreshToken }
          );
          const newAccess = resp.data.accessToken;
          if (typeof window !== 'undefined') {
            localStorage.setItem('authToken', newAccess);
          }
          pendingQueue.forEach(cb => cb(newAccess));
          pendingQueue = [];

          original.headers = original.headers ?? {};
          original.headers.Authorization = `Bearer ${newAccess}`;
          return instance(original);
        } catch (e) {
          pendingQueue.forEach(cb => cb(null));
          pendingQueue = [];
          if (typeof window !== 'undefined') {
            localStorage.removeItem('authToken');
            localStorage.removeItem('refreshToken');
          }
          return Promise.reject(e);
        } finally {
          isRefreshing = false;
        }
      }

      return Promise.reject(error);
    }
  );

  return instance;
}

export const http = createHttpClient();
