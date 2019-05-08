import { NEW_COMMENT, UPVOTE_COMMENT, FETCH_COMMENTS } from "../actions/types";

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
        items: [...state.items, action.payload]
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
    default:
      return state;
  }
}
