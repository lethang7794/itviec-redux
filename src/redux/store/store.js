import { createStore } from 'redux';
import jobReducer from '../reducers/job.reducer';

const store = createStore(jobReducer);

export default store;
