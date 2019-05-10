import { AUTH_USER, AUTH_ERROR } from "./types";

export const signIn = code => dispatch => {
  fetch("http://localhost:8080/signIn", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(code)
  })
    .then(res => res.json())
    .then(
      user =>
        dispatch({
          type: AUTH_USER,
          payload: user
        })
      //localStorage.setItem("token", response.data.token);
    );
};
