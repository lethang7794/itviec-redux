import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import jobActions from '../redux/actions/job.actions';

const JobDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const job = useSelector((state) => state.job.job);
  const error = useSelector((state) => state.job.error);
  const isLoading = useSelector((state) => state.job.isLoading);

  useEffect(() => {
    dispatch(jobActions.fetchJob(id));
  }, [dispatch, id]);

  return (
    <div className='JobDetailPage'>
      <Container>
        {error && (
          <h1 className='text-center'>{`Something went wrong. Error: ${error}`}</h1>
        )}

        {isLoading ? (
          <h1 className='text-center'>Loading Job Detail</h1>
        ) : (
          <>
            {job && (
              <>
                <h2>{job.title}</h2>
                <div>{job.description}</div>
                <Link to={`/jobs/${id}/apply`}>
                  <Button>Apply</Button>
                </Link>
              </>
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default JobDetailPage;
