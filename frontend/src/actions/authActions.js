import { AUTH_USER, AUTH_ERROR } from "./types";

export const signIn = params => dispatch => {
  fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(params)
  })
    .then(response => {
      dispatch({
        type: AUTH_USER,
        payload: response
      });
      //localStorage.setItem("token", response.data.token);
      console.log("osssama " + response);
    })
    .catch(error => {
      dispatch({
        type: AUTH_ERROR,
        payload: "Error"
      });
    });
};
