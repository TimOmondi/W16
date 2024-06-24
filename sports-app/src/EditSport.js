import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import SportForm from './SportForm';
import Loader from './Loader';

const EditSport = () => {
  const { id } = useParams();
  const history = useHistory();
  const [sport, setSport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/api/sports/${id}`)
      .then(response => {
        setSport(response.data);
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = (updatedSport) => {
    axios.put(`/api/sports/${id}`, updatedSport)
      .then(() => history.push('/sports'));
  };

  if (loading) return <Loader />;

  return (
    <Container>
      <h2>Edit Sport</h2>
      <SportForm sport={sport} handleSubmit={handleSubmit} />
    </Container>
  );
};

export default EditSport;
