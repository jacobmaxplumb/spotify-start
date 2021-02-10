// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  loginUrl: 'https://accounts.spotify.com/authorize?client_id=9073ad6d846843dbb97a9d1a3561aa31&response_type=code&redirect_uri=http://localhost:4200/login&scope=user-top-read%20app-remote-control%20streaming%20user-read-playback-state%20user-modify-playback-state%20user-read-currently-playing',
  clientId: '9073ad6d846843dbb97a9d1a3561aa31', 
  clientSecret: '44ab04f08b7e4ffc8481bf7b7e0b71f1'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
