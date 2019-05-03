import { FETCH_POSTS, FETCH_MORE_POSTS, UPVOTE_POST, DOWNVOTE_POST } from '../actions/types';

const initialState = {
    items: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case FETCH_MORE_POSTS:
            return {
                ...state,
                items: state.items.concat(action.payload)
            };
        case UPVOTE_POST:
            return {
                ...state,
                items: state.items.map(
                    (post) => post.id === action.payload ? { ...post, voteCount: post.voteCount + 1 }
                        : post
                )
            };
        case DOWNVOTE_POST:
            return {
                ...state,
                items: state.items.map(
                    (post) => post.id === action.payload ? { ...post, voteCount: post.voteCount - 1 }
                        : post
                )
            };
        default:
            return state;
    }
}