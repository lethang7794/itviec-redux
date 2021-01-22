import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainNavBar from './components/MainNavBar';
import JobListPage from './pages/JobListPage';

function App() {
  return (
    <div className='App'>
      <MainNavBar />
      <JobListPage />
    </div>
  );
}

export default App;
