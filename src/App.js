import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
        <Route exact path='/' component={JobListPage} />
        <Route path='/jobs/:id' component={JobDetailPage} />
      </Switch>
    </div>
  );
}

export default App;
