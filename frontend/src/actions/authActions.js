import { AUTH_USER, AUTH_ERROR } from "./types";

export const signIn = code => dispatch => {
  fetch("http://localhost:8080/signIn", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(code)
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
