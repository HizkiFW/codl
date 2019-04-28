import { FETCH_POSTS, UPVOTE_POST, DOWNVOTE_POST } from './types';
import $ from 'jquery';

export const fetchPosts = (filter) => dispatch => {
  fetch('http://localhost:8080/getPosts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(filter)
  }).then(res => res.json())
    .then(posts => dispatch({
      type: FETCH_POSTS,
      payload: posts
    }));
}

export const createPost = (postData) => dispatch => {
  fetch('http://localhost:8080/submitPost', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  }).then(response => {
    if (response.ok) {
      window.location = "/";
    }
    if (response.status === 400) {
      return response.json()
        .then(responseJson => {
          $('#error').empty()
          responseJson.forEach(error => {
            if (error.status === "400") {
              $('<li>' + error.message + '</li>').appendTo('#error');
            }
          });
          $('#error').fadeIn();
          $('html, body').animate({ scrollTop: 0 }, 'fast');
        })
    }
  })
    .catch((error) => {
      alert(error);
    });

}

export const upvotePost = (id) => dispatch => {
  fetch('http://localhost:8080/upvotePost', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(id)
  }).then(response => dispatch({
    type: UPVOTE_POST,
    payload: id
  }))
}

export const downvotePost = (id) => dispatch => {
  fetch('http://localhost:8080/downvotePost', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(id)
  }).then(response => dispatch({
    type: DOWNVOTE_POST,
    payload: id
  }))
}