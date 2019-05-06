import { SHOW_MODAL, CLOSE_MODAL } from './types';

export const showModal = () => dispatch => {
     dispatch({type: SHOW_MODAL})
};


export const closeModal = () => dispatch => {
document.getElementById('root').classList.toggle('modal')
    .then(() => dispatch({
      type: CLOSE_MODAL
    }));
}