import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import fetchJobs from './redux/actions/job.actions';
import './App.css';
import MainNavBar from './components/MainNavBar';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);
  return (
    <div className='App'>
      <MainNavBar />
      <Container>
        <h1 className='text-center'>Let's go</h1>
      </Container>
    </div>
  );
}

export default App;
