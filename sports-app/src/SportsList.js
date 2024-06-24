import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';

const SportsList = () => {
  const [sports, setSports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/sports')
      .then(response => {
        setSports(response.data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {sports.map((sport, index) => (
          <tr key={sport.id}>
            <td>{index + 1}</td>
            <td>{sport.name}</td>
            <td>
              <Link to={`/sports/${sport.id}`}>View</Link> | 
              <Link to={`/edit-sport/${sport.id}`}>Edit</Link> | 
              <Link to={`/delete-sport/${sport.id}`}>Delete</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default SportsList;
