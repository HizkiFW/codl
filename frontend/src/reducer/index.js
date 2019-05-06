import { combineReducers } from 'redux';
import postReducer from './postReducer';
import commentReducer from './commentReducer';
import tagReducer from './tagReducer';
import authReducer from './authReducer';
import modalReducer from './modalReducer';

export default combineReducers({
    posts: postReducer,
    comments: commentReducer,
    tags: tagReducer,
    auth: authReducer,
    modal: modalReducer
})