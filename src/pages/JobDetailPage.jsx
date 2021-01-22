import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import jobActions from '../redux/actions/job.actions';

const JobDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(jobActions.fetchJob(id));
  }, [dispatch, id]);

  return (
    <div className='JobDetailPage'>
      <Container>
        <h1>{`Job Detail Page for ${id}`}</h1>
      </Container>
    </div>
  );
};

export default JobDetailPage;
