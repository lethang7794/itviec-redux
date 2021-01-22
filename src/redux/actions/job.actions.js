const fetchJobs = () => {
  const BACKEND_URL =
    'https://my-json-server.typicode.com/lethang7794/itviec-redux';

  return async (dispatch) => {
    dispatch({ type: 'JOBS_FETCH_INIT' });

    try {
      const url = `${BACKEND_URL}/jobs`;
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: 'JOBS_FETCH_SUCCESS',
          payload: data,
        });
      } else {
        // This app use a fake backend, no need to check for other response status.
      }
    } catch (error) {
      dispatch({
        type: 'JOBS_FETCH_FAILURE',
        payload: error,
      });
    }
  };
};

const jobActions = {
  fetchJobs,
};

export default jobActions;
