import { FETCH_POSTS, UPVOTE_POST, DOWNVOTE_POST, NEW_COMMENT } from '../actions/types';

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
        case NEW_COMMENT:
            return {
                ...state,
                items: state.items.map(
                    (post) => post.id === action.payload.postId ? { ...post, comments: post.comments.concat(action.payload) }
                        : post
                )
            };
        default:
            return state;
    }
}