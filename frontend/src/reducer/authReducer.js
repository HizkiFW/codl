import {
  AUTH_USER,
  AUTH_ERROR,
  USER_NEW_POST,
  USER_NEW_COMMENT,
  USER_UPVOTE_POST,
  USER_DOWNVOTE_POST,
  USER_REMOVE_VOTE_POST,
  USER_UPVOTE_COMMENT,
  USER_REMOVE_VOTE_COMMENT
} from "../actions/types";

const INITIAL_STATE = {
  authenticated: "",
  errorMessage: ""
};

function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}

function updateUserPostVotes(state, action, val) {
  let updatedItems;
  if (state.votes.find(vote => vote.postId === action.payload.postId)) {
    updatedItems = state.votes.map(vote =>
      vote.postId === action.payload.postId ? { ...vote, value: val } : vote
    );
  } else {
    updatedItems = state.votes.concat(action.payload);
  }
  return updateObject(state, {
    votes: updatedItems
  });
}

function updateUserCommentVotes(state, action, val) {
  let updatedItems;
  if (state.votes.find(vote => vote.commentId === action.payload.commentId)) {
    updatedItems = state.votes.map(vote =>
      vote.commentId === action.payload.commentId
        ? { ...vote, value: val }
        : vote
    );
  } else {
    updatedItems = state.votes.concat(action.payload);
  }
  return updateObject(state, {
    votes: updatedItems
  });
}

function newPostVote(state, action) {
  let vote = {
    userId: state.id,
    commentId: -1,
    postId: action.payload.id,
    value: 1
  };

  let updatedItems = state.votes.concat(vote);

  return updateObject(state, {
    votes: updatedItems
  });
}

function newCommentVote(state, action) {
  let vote = {
    userId: state.id,
    commentId: action.payload.id,
    postId: -1,
    value: 1
  };

  let updatedItems = state.votes.concat(vote);

  return updateObject(state, {
    votes: updatedItems
  });
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: action.payload };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    case USER_NEW_POST:
      return {
        ...state,
        authenticated: newPostVote(state.authenticated, action)
      };
    case USER_NEW_COMMENT:
      return {
        ...state,
        authenticated: newCommentVote(state.authenticated, action)
      };
    case USER_UPVOTE_POST:
      return {
        ...state,
        authenticated: updateUserPostVotes(state.authenticated, action, 1)
      };
    case USER_DOWNVOTE_POST:
      return {
        ...state,
        authenticated: updateUserPostVotes(state.authenticated, action, -1)
      };
    case USER_REMOVE_VOTE_POST:
      return {
        ...state,
        authenticated: updateUserPostVotes(state.authenticated, action, 0)
      };
    case USER_UPVOTE_COMMENT:
      return {
        ...state,
        authenticated: updateUserCommentVotes(state.authenticated, action, 1)
      };
    case USER_REMOVE_VOTE_COMMENT:
      return {
        ...state,
        authenticated: updateUserCommentVotes(state.authenticated, action, 0)
      };
    default:
      return state;
  }
}
