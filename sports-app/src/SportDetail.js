import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import axios from 'axios';
import Loader from './Loader';

const SportDetail = () => {
  const { id } = useParams();
  const [sport, setSport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/api/sports/${id}`)
      .then(response => {
        setSport(response.data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;

  return (
    <Container>
      <Card>
        <Card.Header>{sport.name}</Card.Header>
        <Card.Body>
          <Card.Text>{sport.description}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SportDetail;
