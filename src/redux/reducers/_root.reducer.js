import { combineReducers } from 'redux';
import user from './user.reducer';
import errors from './errors.reducer';

// root.reducer is where all reducers will live
const rootReducer = combineReducers ({
    errors, // contains registrationMessage and loginMessage
    user, // will have an id and username if someone is logged in
});

export default rootReducer;