import { SHOW_MODAL, CLOSE_MODAL } from "../actions/types";

const initialState = {
  showModal: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        showModal: true
      };
    case CLOSE_MODAL:
      return {
        ...state,
        showModal: false
      };
    default:
      return state;
  }
}
