import { AUTH_USER, AUTH_ERROR } from "./types";

export const signIn = userData => dispatch => {
  fetch("http://localhost:8080/signIn", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(userData)
  })
    .then(response => {
      dispatch({
        type: AUTH_USER,
        payload: response.data.token
      });
      localStorage.setItem("token", response.data.token);
    })
    .catch(error => {
      dispatch({
        type: AUTH_ERROR,
        payload: "Invalid email or password"
      });
    });
};
