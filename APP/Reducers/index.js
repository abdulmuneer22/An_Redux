import { combineReducers } from 'redux';
import loginStatusReducer from './loginStatusReducer'

export default combineReducers({
    loginstatus : loginStatusReducer
});