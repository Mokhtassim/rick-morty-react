import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <AppBar position="absolute">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Rick & Morty App
        </Typography>
        <Button color="inherit" component={Link} to="/">
          All Characters
        </Button>
        <Button color="inherit" component={Link} to="/favorites">
          Favorites
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
