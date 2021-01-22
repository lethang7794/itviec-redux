import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const JobApplyPage = () => {
  const { id } = useParams();

  return (
    <div class='JobApplyPage'>
      <Container>
        <h1>{`Hello from JobApplyPage for job#${id}`}</h1>
      </Container>
    </div>
  );
};

export default JobApplyPage;
