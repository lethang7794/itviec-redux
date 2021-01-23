import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainNavBar from './components/MainNavBar';
import JobListPage from './pages/JobListPage';
import JobDetailPage from './pages/JobDetailPage';
import JobApplyPage from './pages/JobApplyPage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const location = useLocation();

  return (
    <div className='App'>
      {location.pathname !== '/login' && <MainNavBar />}
      <Switch>
        <Route exact path='/login' render={() => <LoginPage />} />
        <Route exact path='/' render={() => <JobListPage />} />
        <Route exact path='/jobs' render={() => <JobListPage />} />
        <Route exact path='/jobs/:id' render={() => <JobDetailPage />} />
        <ProtectedRoute
          exact
          path='/jobs/:id/apply'
          render={(props) => <JobApplyPage {...props} />}
        />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
