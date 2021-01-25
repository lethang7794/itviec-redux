const initialState = {
  isAuthenticated: false,
  user: null,
  isLoading: false,
  error: null,
  shouldRedirect: false,
};

const authReducer = (state = initialState, action) => {
  if (action.type === 'LOGIN_INIT') {
    return {
      ...state,
      isLoading: true,
      error: null,
    };
  }

  if (action.type === 'LOGIN_SUCCESS') {
    return {
      ...state,
      isLoading: false,
      error: null,
      isAuthenticated: true,
      // This is just a mockup for login system
      user: action.payload,
    };
  }

  if (action.type === 'LOGIN_FAILURE') {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }

  if (action.type === 'REDIRECTING') {
    return {
      ...state,
      shouldRedirect: true,
    };
  }

  if (action.type === 'REDIRECTED') {
    return {
      ...state,
      shouldRedirect: false,
    };
  }

  if (action.type === 'LOGOUT') {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
    };
  }

  return state;
};

export default authReducer;
