import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const SportForm = ({ sport, handleSubmit }) => {
  const [name, setName] = useState(sport ? sport.name : '');
  const [description, setDescription] = useState(sport ? sport.description : '');

  const submitForm = (e) => {
    e.preventDefault();
    handleSubmit({ name, description });
  };

  return (
    <Form onSubmit={submitForm}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter sport name" 
          required 
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control 
          as="textarea" 
          rows={3} 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Enter description" 
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default SportForm;
