import { combineReducers } from 'redux';
import postReducer from './postReducer';
import tagReducer from './tagReducer';

export default combineReducers({
    posts: postReducer,
    tags: tagReducer
})