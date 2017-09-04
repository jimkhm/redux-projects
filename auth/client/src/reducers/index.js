import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';

const rootReducer = combineReducers({
  form, //form: form
  auth:authReducer //auth is ok as well
});

export default rootReducer;
