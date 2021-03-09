import { combineReducers } from 'redux';
import userReducer from './userReducer';
import errors from './errors.reducer';

// root.reducer is where all reducers will live
const rootReducer = combineReducers ({
    userReducer,
    errors,
});

export default rootReducer;