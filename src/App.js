import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainNavBar from './components/MainNavBar';
import JobListPage from './pages/JobListPage';
import JobDetailPage from './pages/JobDetailPage';
import JobApplyPage from './pages/JobApplyPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/login' render={() => <LoginPage />} />
        <>
          <MainNavBar />
          <Route exact path='/' render={() => <JobListPage />} />
          <Route exact path='/jobs' render={() => <JobListPage />} />
          <Route exact path='/jobs/:id' render={() => <JobDetailPage />} />
          <Route exact path='/jobs/:id/apply' render={() => <JobApplyPage />} />
          <Redirect to='/' />
        </>
      </Switch>
    </div>
  );
}

export default App;
