import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth(); 

  return (
    <AppBar position="static" style={{ background: "#e4d9b4" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          style={{ color: "blue" }}
          sx={{ flexGrow: 1 }}
        >
          Item Management System
        </Typography>

        <Box>
          <Link to="/">
            <Button color="inherit">Home</Button>
          </Link>

          {isAuthenticated ? (
            <>
              
              <Link to="/items">
                <Button color="inherit">All Items</Button>
              </Link>
              <Button color="inherit" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button color="inherit">Login</Button>
              </Link>
              <Link to="/register">
                <Button color="inherit">Register</Button>
              </Link>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
