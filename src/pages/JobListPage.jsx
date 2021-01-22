import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import jobActions from '../redux/actions/job.actions';

const JobListPage = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(jobActions.fetchJobs());
  }, [dispatch]);

  return (
    <Container className='JobList'>
      {error && (
        <h1 className='text-center'>{`Something went wrong. Error: ${error}`}</h1>
      )}

      {isLoading ? (
        <h1 className='text-center'>Loading Job List</h1>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>
              <Link to={`/jobs/${job.id}`}>{job.title}</Link>
              <ul>
                {job.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default JobListPage;
