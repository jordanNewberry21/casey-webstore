import { combineReducers } from 'redux';
import user from './user.reducer';
import errors from './errors.reducer';
import inventory from './inventory.reducer';

// root.reducer is where all reducers will live
const rootReducer = combineReducers ({
    errors, // contains registrationMessage and loginMessage
    user, // will have an id and username if someone is logged in
    inventory, // holds current state of the inventory
});

export default rootReducer;