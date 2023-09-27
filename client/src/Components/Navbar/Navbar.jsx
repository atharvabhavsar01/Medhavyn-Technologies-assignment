import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const styles = {
  appBar: {
    backgroundColor: 'white', // Set background color to white
    marginBottom: '2rem',              // Remove margin
    padding: '0',   
    borderRadius:"5px",          // Remove padding
  },
  title: {
    color: 'blue',            // Set text color to blue
  },
};

const Navbar = () => {
  return (
    <AppBar position="static" style={styles.appBar}>
      <Toolbar>
        <Typography variant="h6" component="div" style={styles.title}>
          User Management App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
