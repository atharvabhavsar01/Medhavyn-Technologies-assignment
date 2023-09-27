import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const useStyles = {
  paper: {
    margin: '10rem',
    padding: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  button: {
    marginTop: '5px',
    width:'6rem'
  },
};

function UpdateUser() {
  const { id } = useParams();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/getUser/${id}`)
      .then((result) => {
        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      age: parseInt(age), // Convert age to a number
    };

    axios
      .put(`http://localhost:3001/updateUser/${id}`, newUser)
      .then((result) => {
        console.log(result);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <Paper elevation={3} style={useStyles.paper}>
      <Typography variant="h4" gutterBottom>
        Update User
      </Typography>
      <form style={useStyles.form}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          label="Age"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={useStyles.button}
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
}

export default UpdateUser;
