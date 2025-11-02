import { useState, useEffect, useCallback } from 'react';
import type { User, UserSession } from '@/types';

interface AuthState {
  user: User | null;
  session: UserSession | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

const defaultAuthState: AuthState = {
  user: null,
  session: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>(defaultAuthState);

  const refreshToken = useCallback(async () => {
    try {
      const storedSession = localStorage.getItem('auth-session');
      if (!storedSession) return;

      const session = JSON.parse(storedSession);

      const response = await fetch('/api/auth/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken: session.refreshToken }),
      });

      if (!response.ok) {
        throw new Error('Token refresh failed');
      }

      const data = await response.json();

      // Update stored session
      localStorage.setItem(
        'auth-session',
        JSON.stringify({
          ...session,
          ...data,
        })
      );

      setAuthState(prev => ({
        ...prev,
        session: { ...session, ...data },
        error: null,
      }));

      return data;
    } catch (error) {
      console.error('Token refresh failed:', error);
      throw error;
    }
  }, []);

  const checkSession = useCallback(async () => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));

      // Check for stored session
      const storedSession = localStorage.getItem('auth-session');
      if (storedSession) {
        const session = JSON.parse(storedSession);
        const now = new Date();
        const expiresAt = new Date(session.expiresAt);

        if (expiresAt > now) {
          // Session is still valid
          setAuthState(prev => ({
            ...prev,
            user: session.user,
            session: session,
            isAuthenticated: true,
            isLoading: false,
          }));
        } else {
          // Session expired, try to refresh
          await refreshToken();
        }
      } else {
        setAuthState(prev => ({ ...prev, isLoading: false }));
      }
    } catch (error) {
      console.error('Session check failed:', error);
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Failed to check session',
      }));
    }
  }, [refreshToken]);

  // Check for existing session on mount
  useEffect(() => {
    checkSession();
  }, [checkSession]);

  const login = useCallback(async (email: string, password: string) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));

      // Simulate API call
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();

      // Store session
      localStorage.setItem('auth-session', JSON.stringify(data));

      setAuthState({
        user: data.user,
        session: data.session,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });

      return data;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Login failed';
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }));
      throw error;
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true }));

      // Call logout API
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sessionId: authState.session?.id }),
      });
    } catch (error) {
      console.error('Logout API call failed:', error);
    } finally {
      // Clear local session regardless of API call result
      localStorage.removeItem('auth-session');
      setAuthState(defaultAuthState);
    }
  }, [authState.session?.id]);

  const updateUser = useCallback((userData: Partial<User>) => {
    setAuthState(prev => {
      if (!prev.user) return prev;

      const updatedUser = { ...prev.user, ...userData };

      // Update stored session
      const storedSession = localStorage.getItem('auth-session');
      if (storedSession) {
        const session = JSON.parse(storedSession);
        session.user = updatedUser;
        localStorage.setItem('auth-session', JSON.stringify(session));
      }

      return {
        ...prev,
        user: updatedUser,
      };
    });
  }, []);

  const clearError = useCallback(() => {
    setAuthState(prev => ({ ...prev, error: null }));
  }, []);

  return {
    ...authState,
    login,
    logout,
    refreshToken,
    updateUser,
    clearError,
  };
}
