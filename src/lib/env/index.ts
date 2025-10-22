export const env = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL ?? '',
  nodeEnv: process.env.NODE_ENV ?? 'development',
};

export function isProd() {
  return env.nodeEnv === 'production';
}

export function isDev() {
  return env.nodeEnv === 'development';
}
