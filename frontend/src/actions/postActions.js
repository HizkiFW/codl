import {
  FETCH_POSTS,
  FETCH_MORE_POSTS,
  UPVOTE_POST,
  DOWNVOTE_POST,
  USER_UPVOTE_POST,
  USER_DOWNVOTE_POST,
  USER_REMOVE_VOTE_POST
} from "./types";
import $ from "jquery";

export const fetchPosts = filter => dispatch => {
  fetch("http://localhost:8080/getPosts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(filter)
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Something went wrong.");
      }
    })
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    )
    .catch(error => {
      console.log(error);
    });
};

export const fetchMorePosts = filter => dispatch => {
  fetch("http://localhost:8080/getPosts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(filter)
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Something went wrong.");
      }
    })
    .then(posts =>
      dispatch({
        type: FETCH_MORE_POSTS,
        payload: posts
      })
    )
    .catch(error => {
      console.log(error);
    });
};

export const createPost = postData => dispatch => {
  fetch("http://localhost:8080/submitPost", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(response => {
      if (response.ok) {
        window.location = "/";
      }
      if (response.status === 400) {
        return response.json().then(responseJson => {
          $("#error").empty();
          responseJson.forEach(error => {
            if (error.status === "400") {
              $("<li>" + error.message + "</li>").appendTo("#error");
            }
          });
          $("#error").fadeIn();
          $("html, body").animate({ scrollTop: 0 }, "fast");
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export const upvotePost = vote => dispatch => {
  fetch("http://localhost:8080/upvotePost", {
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
    .then(() => {
      dispatch({
        type: USER_UPVOTE_POST,
        payload: vote
      });
      dispatch({
        type: UPVOTE_POST,
        payload: vote.postId
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const downvotePost = vote => dispatch => {
  fetch("http://localhost:8080/downvotePost", {
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
    .then(() => {
      dispatch({
        type: USER_DOWNVOTE_POST,
        payload: vote
      });
      dispatch({
        type: DOWNVOTE_POST,
        payload: vote.postId
      });
    })
    .catch(error => {
      console.log(error);
    });
};
