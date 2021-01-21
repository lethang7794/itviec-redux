const initialState = {
  jobs: [],
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

  return state;
};

export default jobReducer;
