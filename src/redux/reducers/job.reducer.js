const initialState = {
  jobs: [],
  isLoading: false,
};

const jobReducer = (state = initialState, action) => {
  if (action.type === 'JOBS_FETCH_INIT') {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === 'JOBS_FETCH_SUCCESS') {
    return {
      ...state,
      isLoading: false,
      jobs: action.payload,
    };
  }

  if (action.type === 'JOBS_FETCH_FAILURE') {
    return {
      ...state,
      isLoading: false,
    };
  }

  return state;
};

export default jobReducer;
