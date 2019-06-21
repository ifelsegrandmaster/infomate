import {combineReducers} from "redux/es/redux";
import postReducer from './postReducer';

export default combineReducers({
    posts:postReducer
});