import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const JobDetailPage = () => {
  const { id } = useParams();

  return (
    <div className='JobDetailPage'>
      <Container>
        <h1>{`Job Detail Page for ${id}`}</h1>
      </Container>
    </div>
  );
};

export default JobDetailPage;
