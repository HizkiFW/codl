import { FETCH_POSTS, UPVOTE_POST, DOWNVOTE_POST } from './types';

export const fetchPosts = (tag) => dispatch => {
  fetch('http://localhost:8080/getPosts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: tag
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
    } else {
      throw new Error('Something went wrong');
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