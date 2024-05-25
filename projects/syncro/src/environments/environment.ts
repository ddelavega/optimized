// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import pkg from './../../../../package.json';

export const environment = {
  production: false,
  apiEnv: 'DEFAULT',
  appVersion: pkg.version,
  apiUrl: 'http://localhost:4000',
  googleSheetsApiKey: 'AIzaSyD-Nkv-g1682kKdauukFPmOCNaQk0wP540',
  characters: {
    spreadsheetId: '1gSc_7WCmt-HuSLX01-Ev58VsiFuhbpYVo8krbPCvvqA',
    worksheetName: 'Characters'
  },
  dashboardApi: 'http://localhost:3000/api/',


};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
