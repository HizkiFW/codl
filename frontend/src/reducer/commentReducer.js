import {
  NEW_COMMENT,
  DELETE_COMMENT,
  DELETE_POST_COMMENT,
  UPVOTE_COMMENT,
  FETCH_COMMENTS,
  REMOVE_VOTE_COMMENT
} from "../actions/types";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_COMMENT:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case DELETE_COMMENT:
      return {
        ...state,
        items: state.items.filter(comment => comment.id !== action.payload)
      };
      case DELETE_POST_COMMENT:
      return {
        ...state,
        items: state.items.filter(comment => comment.postId !== action.payload)
      };
    case UPVOTE_COMMENT:
      return {
        ...state,
        items: state.items.map(comment =>
          comment.id === action.payload
            ? { ...comment, voteCount: comment.voteCount + 1 }
            : comment
        )
      };
    case REMOVE_VOTE_COMMENT:
      return {
        ...state,
        items: state.items.map(comment =>
          comment.id === action.payload
            ? { ...comment, voteCount: comment.voteCount - 1 }
            : comment
        )
      };
    default:
      return state;
  }
}
