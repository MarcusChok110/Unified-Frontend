# Unified (Frontend)

This is a web application built with Angular for the Unified chat application. The application connects to Auth0 to authenticate users and provide access tokens to the Unified Backend. By default, the application is hosted locally at http://localhost:4200/.

## Pages

### Home

![Home page](https://i.imgur.com/oaVsyff.png)

### Profile

![Profile page list](https://i.imgur.com/kfuIpqA.png)
![Profile page JSON](https://i.imgur.com/vbClus1.png)

### Chat

![Chat page](https://i.imgur.com/7qO0zt2.png)

## Dependencies

These are the dependencies of the application as defined in the package.json file:

```json
    "@angular/animations": "~11.2.6",
    "@angular/common": "~11.2.6",
    "@angular/compiler": "~11.2.6",
    "@angular/core": "~11.2.6",
    "@angular/forms": "~11.2.6",
    "@angular/platform-browser": "~11.2.6",
    "@angular/platform-browser-dynamic": "~11.2.6",
    "@angular/router": "~11.2.6",
    "@auth0/auth0-angular": "^1.4.0",
    "@stomp/ng2-stompjs": "^8.0.0",
    "rxjs": "~6.6.0",
    "tslib": "^2.0.0",
    "zone.js": "~0.11.3"
```

## Local Installation

Currently, the application is not deployed or hosted on the web. To use it, you must install it locally. Firstly, ensure you have Node and npm installed on your system. Then, follow the following steps:

1. Download / clone the repository.
2. cd to the root directory and run `npm install` in your CLI to install the respective dependencies.
3. Create an `auth_config.json` file in the root directory with the following values:
   
```json
{
  "domain": <YOUR_AUTH0_DOMAIN>,
  "clientId": <YOUR_AUTH0_CLIENT_ID>,
  "audience": <YOUR_AUTH0_AUDIENCE>,
  "serverUrl": "http://localhost:8080"
}
```

4. Run `ng serve` to run the application in development mode.
5. The application should now be running on http://localhost:4200/!
6. To ensure the application has full functionality, run the backend at the same time. Now, you should be able to chat with anyone on your local network!

## Todo

- Implement edit messages functionality
