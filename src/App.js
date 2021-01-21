import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainNavBar from './components/MainNavBar';
import JobListPage from './pages/JobListPage';
import JobDetailPage from './pages/JobDetailPage';

function App() {
  return (
    <div className='App'>
      <MainNavBar />
      <Switch>
        <Route exact path='/' render={() => <JobListPage />} />
        <Route path='/jobs/:id' render={() => <JobDetailPage />} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
