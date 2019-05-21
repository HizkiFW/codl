import axios from "axios";
import { AUTH_USER, AUTH_ERROR } from "./types";
import { closeModal } from "./modalActions";

const apiUrl = API_URL + "auth";

export const signIn = code => dispatch =>
  Promise.resolve(
    axios
      .post(`${apiUrl}/signIn`, code)
      .then(res => {
        dispatch({
          type: AUTH_USER,
          payload: res.data
        });
        dispatch(closeModal());
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: AUTH_ERROR, payload: error });
      })
  );

export const signOut = () => {
  return {
    type: AUTH_USER,
    payload: ""
  };
};
