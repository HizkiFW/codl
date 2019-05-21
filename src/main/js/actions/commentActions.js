import axios from "axios";
import {
  FETCH_COMMENTS,
  NEW_COMMENT,
  DELETE_COMMENT,
  UPVOTE_COMMENT,
  REMOVE_VOTE_COMMENT,
  USER_NEW_COMMENT,
  USER_UPVOTE_COMMENT,
  USER_REMOVE_VOTE_COMMENT,
  USER_DELETE_COMMENT
} from "./types";

const apiUrl = API_URL + "comment";

export const fetchComments = postId => dispatch => {
  axios
    .post(`${apiUrl}/getAll`, postId, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      dispatch({
        type: FETCH_COMMENTS,
        payload: res.data
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const createComment = comment => dispatch => {
  axios
    .post(`${apiUrl}/add`, comment)
    .then(res => {
      dispatch({
        type: USER_NEW_COMMENT,
        payload: res.data
      });
      dispatch({
        type: NEW_COMMENT,
        payload: res.data
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const upvoteComment = vote => dispatch => {
  axios
    .post(`${apiUrl}/upvote`, vote)
    .then(res => {
      dispatch({
        type: USER_UPVOTE_COMMENT,
        payload: vote
      });
      dispatch({
        type: UPVOTE_COMMENT,
        payload: vote.commentId
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const removeVoteComment = vote => dispatch => {
  axios
    .post(`${apiUrl}/removeVote`, vote)
    .then(res => {
      dispatch({
        type: USER_REMOVE_VOTE_COMMENT,
        payload: vote
      });
      dispatch({
        type: REMOVE_VOTE_COMMENT,
        payload: vote.commentId
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const deleteComment = id => dispatch => {
  axios
    .post(`${apiUrl}/delete`, id, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(() => {
      dispatch({
        type: USER_DELETE_COMMENT,
        payload: id
      });
      dispatch({
        type: DELETE_COMMENT,
        payload: id
      });
    })
    .catch(error => {
      console.log(error);
    });
};
