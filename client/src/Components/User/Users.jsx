import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  createTheme,
  ThemeProvider,
  Typography,
  Button,
  Box,
  CssBaseline, // Import CssBaseline for global CSS reset
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3", // Blue color
    },
  },
});

const useStyles = {
  table: {
    minWidth: 650,
  },
  HeadCell: {
    fontWeight: "bold",
    fontSize: "40px",
    textAlign: "center",
    marginLeft: "45%",
  },
  nameCell: {
    fontWeight: "bold",
    fontSize: "14px",
    textAlign: "left",
  },
  addButton: {
    backgroundColor: "#2196f3", // Blue color
    color: "white",
    marginRight: "10px",
    textDecoration: "Bold",
    padding: "7px 14px",
    marginBottom: "10px",
    borderRadius: "5px",
    fontSize: "14px",
    width:"2rem"
  },
  container: {
    background:
      'linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)', // Add gradient background
    padding: "20px", // Add padding to the container
    minHeight: "100vh", // Ensure the container covers the entire viewport height
    display: "flex",
    flexDirection: "column",
      // Center content vertically
  },
};

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/deleteUser/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Apply global CSS reset */}
      <div className="container" style={useStyles.container}>
      <Navbar />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h1" style={useStyles.HeadCell}>
            User List
          </Typography>
        </Box>

        <Button
          component={Link}
          to="/create"
          variant="contained"
          style={useStyles.addButton}
        >
          Add
        </Button>
        <TableContainer component={Paper}>
          <Table style={useStyles.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell
                    component="th"
                    scope="row"
                    style={useStyles.nameCell}
                  >
                    {user.name}
                  </TableCell>
                  <TableCell align="right">{user.email}</TableCell>
                  <TableCell align="right">{user.age}</TableCell>
                  <TableCell align="right">
                    <IconButton>
                      <Link to={`/update/${user._id}`}>
                        <EditIcon />
                      </Link>
                    </IconButton>
                    <IconButton
                      color="primary"
                      onClick={(e) => handleDelete(user._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </ThemeProvider>
  );
}

export default Users;
