// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth: {
    domain: 'proud-wood-9027.auth0.com',
    clientId: 'FWiDr2xNsQWr8P8029vMYn5LNj4SthRq',
    redirectUri: window.location.origin,
    audience: 'https://healthmonitor.jlopezinc.com'
  },
  serverUrl: 'https://healthmonitor-be.jlopezinc.com'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
