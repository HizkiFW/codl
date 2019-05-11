import { AUTH_USER, AUTH_ERROR } from "./types";
import { closeModal } from "./modalActions";

export const signIn = code => dispatch => {
  fetch("http://localhost:8080/signIn", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(code)
  })
    .then(res => res.json())
    .then(user => {
      dispatch({
        type: AUTH_USER,
        payload: user
      });
      dispatch(closeModal());
      //localStorage.setItem("token", response.data.token);
    })
    .catch(error => {
      dispatch({ type: AUTH_ERROR, payload: error });
    });
};

export const signOut = () => {
  //localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: ""
  };
};
