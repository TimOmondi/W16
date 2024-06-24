import React from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import SportForm from './SportForm';

const AddSport = ({ history }) => {
  const handleSubmit = (sport) => {
    axios.post('/api/sports', sport)
      .then(() => history.push('/sports'));
  };

  return (
    <Container>
      <h2>Add New Sport</h2>
      <SportForm handleSubmit={handleSubmit} />
    </Container>
  );
};

export default AddSport;
