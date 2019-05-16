import axios from "axios";
import {
  FETCH_POSTS,
  FETCH_MORE_POSTS,
  UPVOTE_POST,
  DOWNVOTE_POST,
  USER_NEW_POST,
  USER_UPVOTE_POST,
  USER_DOWNVOTE_POST,
  USER_REMOVE_VOTE_POST
} from "./types";

const apiUrl = "http://localhost:8080/post";

export const fetchPosts = (filter, type) => dispatch => {
  axios
    .post(`${apiUrl}/getAll`, filter)
    .then(res => {
      if (type === "MORE") {
        dispatch({
          type: FETCH_MORE_POSTS,
          payload: res.data
        });
      } else {
        dispatch({
          type: FETCH_POSTS,
          payload: res.data
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export const upvotePost = vote => dispatch => {
  axios
    .post(`${apiUrl}/upvote`, vote)
    .then(res => {
      dispatch({
        type: USER_UPVOTE_POST,
        payload: res.data
      });
      dispatch({
        type: UPVOTE_POST,
        payload: res.data.postId
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const downvotePost = vote => dispatch => {
  axios
    .post(`${apiUrl}/downvote`, vote)
    .then(res => {
      dispatch({
        type: USER_DOWNVOTE_POST,
        payload: res.data
      });
      dispatch({
        type: DOWNVOTE_POST,
        payload: res.data.postId
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const removeVotePost = (vote, prevStatus) => dispatch => {
  axios
    .post(`${apiUrl}/removeVote`, vote)
    .then(res => {
      dispatch({
        type: USER_REMOVE_VOTE_POST,
        payload: res.data
      });
      if (prevStatus === 1) {
        dispatch({
          type: DOWNVOTE_POST,
          payload: res.data.postId
        });
      } else if (prevStatus === -1) {
        dispatch({
          type: UPVOTE_POST,
          payload: res.data.postId
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export const createPost = post => dispatch => {
  axios
    .post(`${apiUrl}/add`, post)
    .then(res => {
      dispatch({
        type: USER_NEW_POST,
        payload: res.data
      });
      window.location = "/";
    })
    .catch(error => {
      console.log(error);
    });
};
