import {
  FETCH_COMMENTS,
  NEW_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT
} from "./types";

export const fetchComments = postId => dispatch => {
  fetch("http://localhost:8080/getComments", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postId)
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Something went wrong.");
      }
    })
    .then(comments =>
      dispatch({
        type: FETCH_COMMENTS,
        payload: comments
      })
    )
    .catch(error => {
      console.log(error);
    });
};

export const createComment = commentData => dispatch => {
  fetch("http://localhost:8080/submitComment", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(commentData)
  })
    .then(res => {
      if (!res.ok) {
        throw new Error("Something went wrong.");
      }
    })
    .then(() =>
      dispatch({
        type: NEW_COMMENT,
        payload: commentData
      })
    )
    .catch(error => {
      console.log(error);
    });
};

export const upvoteComment = vote => dispatch => {
  fetch("http://localhost:8080/upvoteComment", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(vote)
  })
    .then(res => {
      if (!res.ok) {
        throw new Error("Something went wrong.");
      }
    })
    .then(() =>
      dispatch({
        type: UPVOTE_COMMENT,
        payload: vote.commentId
      })
    )
    .catch(error => {
      console.log(error);
    });
};

export const downvoteComment = vote => dispatch => {
  fetch("http://localhost:8080/downvoteComment", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(vote)
  })
    .then(res => {
      if (!res.ok) {
        throw new Error("Something went wrong.");
      }
    })
    .then(() =>
      dispatch({
        type: DOWNVOTE_COMMENT,
        payload: vote.commentId
      })
    )
    .catch(error => {
      console.log(error);
    });
};
