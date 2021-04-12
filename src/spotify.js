
/* 
    1- click LOGIN buttn
    2- redirect to spotify lgin page
    3- redirect to localhost
*/

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "dffb17acce144b80a655b0b97ad2f49a";
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
      .substring(1)
      .split('&')
      .reduce((initial, item) => {
          // #accessToken=mysecretkey&name=damian
          let parts = item.split('=');
          initial[parts[0]] = decodeURIComponent(parts[1])

          return initial;
      }, {})
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;