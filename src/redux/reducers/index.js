import { combineReducers } from 'redux';
import jobReducer from './job.reducer';

// The state produced by combineReducers() namespaces the states of each reducer under their keys as passed to combineReducers()
export default combineReducers({
  job: jobReducer,
});
