export const environment = {
  production: true
};

export let APIURL = '';

switch (window.location.hostname) {
    // this is the deployed angular application
    case 'wash-me-client.herokuapp.com':
        // this is the full url of your deployed API
        APIURL = 'https://wash-me-database.herokuapp.com'
        break;
    default:
        // this is the local host name of your API
        APIURL = 'http://localhost:3000';
}
