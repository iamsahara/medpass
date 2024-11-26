import React from "react";
import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

const Header = ({ isAuthenticated, handleLogout }) => {
  const location = useLocation();

  return (
    <AppBar
      sx={{
        backgroundColor: "#2c3e50", // Classic dark navy blue
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
        padding: "0 1rem",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo or App Name */}
        <Typography
          variant="h5"
          component={RouterLink}
          to="/"
          sx={{
            textDecoration: "none",
            color: "#ecf0f1", // Soft off-white
            fontWeight: "bold",
            letterSpacing: "2px",
            "&:hover": {
              color: "#bdc3c7", // Light gray on hover
            },
            transition: "color 0.3s ease",
          }}
        >
          MedPass
        </Typography>

        {/* Navigation Links */}
        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          <Button
            component={RouterLink}
            to="/dashboard"
            startIcon={<DashboardIcon />}
            sx={{
              fontSize: "1rem",
              textTransform: "none",
              backgroundColor:
                location.pathname === "/dashboard" ? "#34495e" : "transparent", // Subtle blue-gray highlight
              color: location.pathname === "/dashboard" ? "#ecf0f1" : "#bdc3c7",
              borderRadius: "12px",
              padding: "0.5rem 1rem",
              boxShadow:
                location.pathname === "/dashboard"
                  ? "0px 4px 8px rgba(0, 0, 0, 0.2)"
                  : "none",
              transition: "all 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                backgroundColor: "#34495e",
                color: "#ecf0f1",
                transform: "scale(1.05)",
              },
            }}
          >
            Dashboard
          </Button>
        </Stack>

        {/* Authentication Button */}
        {isAuthenticated ? (
          <Button
            onClick={handleLogout}
            endIcon={<LogoutIcon />}
            sx={{
              color: "#ecf0f1",
              border: "1px solid",
              borderColor: "#7f8c8d", // Classic gray
              borderRadius: "12px",
              padding: "0.5rem 1rem",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#7f8c8d",
                borderColor: "#95a5a6", // Lighter gray
                transform: "scale(1.1)",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            Logout
          </Button>
        ) : (
          <Button
            component={RouterLink}
            to="/login"
            endIcon={<LoginIcon />}
            sx={{
              color: "#ecf0f1",
              border: "1px solid",
              borderColor: "#7f8c8d", // Classic gray
              borderRadius: "12px",
              padding: "0.5rem 1rem",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#7f8c8d",
                borderColor: "#95a5a6", // Lighter gray
                transform: "scale(1.1)",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
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
