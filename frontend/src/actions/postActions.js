import { FETCH_POSTS } from './types';

export const fetchPosts = () => dispatch => {
    fetch('http://localhost:8080/codl/getPosts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));
}