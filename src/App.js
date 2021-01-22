import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainNavBar from './components/MainNavBar';
import JobListPage from './pages/JobListPage';
import JobDetailPage from './pages/JobDetailPage';
import JobApplyPage from './pages/JobApplyPage';

function App() {
  return (
    <div className='App'>
      <MainNavBar />
      <Switch>
        <Route exact path='/' render={() => <JobListPage />} />
        <Route exact path='/jobs/:id/apply' render={() => <JobApplyPage />} />
        <Route exact path='/jobs/:id' render={() => <JobDetailPage />} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
