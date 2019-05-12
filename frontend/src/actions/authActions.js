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
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Something went wrong.");
      }
    })
    .then(user => {
      dispatch({
        type: AUTH_USER,
        payload: user
      });
      dispatch(closeModal());
      //localStorage.setItem("token", response.data.token);
    })
    .catch(error => {
      console.log(error);
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
