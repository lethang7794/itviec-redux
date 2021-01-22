import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import jobReducer from '../reducers/job.reducer';

const store = createStore(
  jobReducer,
  /* preloadedState, */
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
