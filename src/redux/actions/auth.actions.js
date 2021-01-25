const login = (user) => {
  return async (dispatch) => {
    dispatch({
      type: 'LOGIN_INIT',
    });

    try {
      // Any login attempt with an email and 'password' as password will pass this mockup authentication system
      if (user && user.email && user.password === 'password') {
        setTimeout(() => {
          dispatch({
            type: 'LOGIN_SUCCESS',
            payload: user,
          });
        }, 1000);
        setTimeout(() => {
          dispatch({
            type: 'REDIRECTING',
          });
        }, 2500);
      } else {
        dispatch({
          type: 'LOGIN_FAILURE',
          payload: 'Wrong user info!',
        });
      }
    } catch (error) {
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: error,
      });
    }
  };
};

const logout = () => {
  return async (dispatch) => {
    dispatch({
      type: 'LOGOUT',
    });
  };
};

export const authActions = {
  login,
  logout,
};
