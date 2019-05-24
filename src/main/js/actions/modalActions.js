import { SHOW_MODAL, CLOSE_MODAL } from "./types";

export const showModal = () => dispatch => Promise.resolve(
  document.body.classList.toggle("modal-open"),
  dispatch({ type: SHOW_MODAL })
);

export const closeModal = () => dispatch => {
  document.body.classList.toggle("modal-open");
  dispatch({ type: CLOSE_MODAL });
};
