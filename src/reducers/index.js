import { combineReducers } from 'redux';
import signupReducer from './signup_reducer';

const rootReducer = combineReducers({
  signup: signupReducer
});

export default rootReducer;