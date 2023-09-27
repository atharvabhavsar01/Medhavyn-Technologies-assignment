import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
    marginTop: '20px',
  },
};

function CreateUsers() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a user object with the data
    const newUser = {
      name,
      email,
      age: parseInt(age), // Convert age to a number
    };

    try {
      // Send a POST request to your backend on port 3001 using Axios
      const response = await axios.post('http://localhost:3001/createUser', newUser);
      console.log(response);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Paper elevation={3} style={useStyles.paper}>
      <Typography variant="h4" gutterBottom>
        Create New User
      </Typography>
      <form style={useStyles.form}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Age"
              name="age"
              value={age}
              onChange={handleAgeChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              style={useStyles.button}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default CreateUsers;
