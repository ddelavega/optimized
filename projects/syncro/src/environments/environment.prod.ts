import pkg from './../../../../package.json';

export const environment = {
  production: true,
  apiEnv: 'PROD',
  appVersion: pkg.version,
  apiUrl: 'http://localhost:4000'
};
