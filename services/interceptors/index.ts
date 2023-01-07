export const authInterceptor = (config: any) => {
  config.headers = {
    'Authorization': `${localStorage?.getItem('auth._token.local')}`
  }

  return config;
};