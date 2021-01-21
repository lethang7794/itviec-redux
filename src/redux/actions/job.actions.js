const fetchJobs = () => {
  const BACKEND_URL =
    'https://my-json-server.typicode.com/lethang7794/itviec-redux';

  return async (dispatch) => {
    try {
      const url = `${BACKEND_URL}/jobs`;
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: 'JOBS_FETCH_SUCCESS',
          payload: data,
        });
      }
      // TODO: Check response status
    } catch (error) {
      // TODO: Dispatch error action
    }
  };
};

export default fetchJobs;
