import { FETCH_POSTS } from './types';

export const fetchPosts = () => dispatch => {
    fetch('http://localhost:8080/getPosts')
        .then(res => res.json())
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

    })
}