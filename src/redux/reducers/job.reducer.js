const initialState = {
  jobs: [],
  job: null,
  isLoading: false,
  error: null,
};

const jobReducer = (state = initialState, action) => {
  if (action.type === 'JOBS_FETCH_INIT') {
    return {
      ...state,
      isLoading: true,
      error: null,
    };
  }

  if (action.type === 'JOBS_FETCH_SUCCESS') {
    return {
      ...state,
      isLoading: false,
      error: null,
      jobs: action.payload,
    };
  }

  if (action.type === 'JOBS_FETCH_FAILURE') {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }

  if (action.type === 'JOB_FETCH_INIT') {
    return {
      ...state,
      isLoading: true,
      error: null,
      job: null, // Prevent showing old data while waiting for new one.
    };
  }

  if (action.type === 'JOB_FETCH_SUCCESS') {
    return {
      ...state,
      isLoading: false,
      error: null,
      job: action.payload,
    };
  }

  if (action.type === 'JOB_FETCH_FAILURE') {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }

  return state;
};

export default jobReducer;
