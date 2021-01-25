import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, useLocation } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const location = useLocation();

  if (isAuthenticated === true) {
    return <Route {...props} />;
  }

  return (
    <Redirect
      to={{
        pathname: '/login',
        state: { from: location.pathname },
      }}
    />
  );
};

export default ProtectedRoute;
