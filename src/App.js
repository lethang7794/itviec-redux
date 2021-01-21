import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import fetchJobs from './redux/actions/job.actions';
import './App.css';
import MainNavBar from './components/MainNavBar';

function App() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);
  return (
    <div className='App'>
      <MainNavBar />
      <Container>
        {isLoading ? (
          <h1 className='text-center'>Loading</h1>
        ) : (
          <ul>
            {jobs.map((job) => (
              <li key={job.id}>{job.title}</li>
            ))}
          </ul>
        )}
      </Container>
    </div>
  );
}

export default App;
