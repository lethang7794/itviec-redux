const initialState = {
  jobs: [],
};

const jobReducer = (state = initialState, action) => {
  if (action.type === 'JOBS_FETCH_SUCCESS') {
    return {
      ...state,
      jobs: action.payload,
    };
  }

  return state;
};

export default jobReducer;
