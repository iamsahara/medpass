import React from "react";
import { AppBar, Toolbar, Typography, Button, Stack, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Header = ({ isAuthenticated, handleLogout }) => {
  return (
    <AppBar sx={{ backgroundColor: "primary.main" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo or App Name */}
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: "bold",
          }}
        >
          MedPass
        </Typography>

        {/* Navigation Links */}
        <Stack
          direction="row"
          spacing={4}
          sx={{
            alignItems: "center",
          }}
        >
          <Link
            component={RouterLink}
            to="/"
            color="inherit"
            underline="none"
            sx={{
              fontSize: "1rem",
              "&:hover": { color: "secondary.light" },
            }}
          >
            Home
          </Link>
          <Link
            component={RouterLink}
            to="/dashboard"
            color="inherit"
            underline="none"
            sx={{
              fontSize: "1rem",
              "&:hover": { color: "secondary.light" },
            }}
          >
            Dashboard
          </Link>
        </Stack>

        {/* Authentication Button */}
        {isAuthenticated ? (
          <Button
            onClick={handleLogout}
            sx={{
              color: "white",
              border: "1px solid",
              borderColor: "secondary.main",
              "&:hover": {
                backgroundColor: "secondary.main",
                borderColor: "secondary.dark",
              },
            }}
          >
            Logout
          </Button>
        ) : (
          <Button
            component={RouterLink}
            to="/login"
            sx={{
              color: "white",
              border: "1px solid",
              borderColor: "secondary.main",
              "&:hover": {
                backgroundColor: "secondary.main",
                borderColor: "secondary.dark",
              },
            }}
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
