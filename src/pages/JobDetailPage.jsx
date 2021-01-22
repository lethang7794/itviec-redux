import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import jobActions from '../redux/actions/job.actions';

const JobDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const job = useSelector((state) => state.job);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(jobActions.fetchJob(id));
  }, [dispatch, id]);

  return (
    <div className='JobDetailPage'>
      <Container>
        {error && (
          <h1 className='text-center'>{`Something went wrong. Error: ${error}`}</h1>
        )}

        {job && (
          <>
            <h2>{job.title}</h2>
            <div>{job.description}</div>
          </>
        )}
      </Container>
    </div>
  );
};

export default JobDetailPage;
