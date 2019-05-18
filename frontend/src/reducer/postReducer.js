import {
  FETCH_POSTS,
  FETCH_MORE_POSTS,
  NEW_POST,
  DELETE_POST,
  UPVOTE_POST,
  DOWNVOTE_POST
} from "../actions/types";

const initialState = {
  items: [],
  hasMore: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        hasMore: action.payload.length > 0 ? true : false,
        items: action.payload
      };
    case FETCH_MORE_POSTS:
      return {
        ...state,
        hasMore: action.payload.length > 0 ? true : false,
        items:
          action.payload.length > 0
            ? state.items.concat(action.payload)
            : state.items
      };
    case NEW_POST:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case DELETE_POST:
      return {
        ...state,
        items: state.items.filter(post => post.id !== action.payload)
      };
    case UPVOTE_POST:
      return {
        ...state,
        items: state.items.map(post =>
          post.id === action.payload
            ? { ...post, voteCount: post.voteCount + 1 }
            : post
        )
      };
    case DOWNVOTE_POST:
      return {
        ...state,
        items: state.items.map(post =>
          post.id === action.payload
            ? { ...post, voteCount: post.voteCount - 1 }
            : post
        )
      };
    default:
      return state;
  }
}
