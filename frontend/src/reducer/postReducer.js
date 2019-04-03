import { FETCH_POSTS, UPVOTE_POST, DOWNVOTE_POST, FETCH_POST } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case FETCH_POST:
            return {
                ...state,
                item: action.payload
            }
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
            }
        default:
            return state;
    }
}