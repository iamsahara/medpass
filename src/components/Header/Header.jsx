import React from "react";
import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import logo2 from "../../assets/Image/logo2.png";

const Header = ({ isAuthenticated, handleLogout }) => {
  return (
    <AppBar
      sx={{
        backgroundColor: "primary.main", // Primary theme color
        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)", // Subtle elevation
        padding: "0 1rem",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo and App Name */}
        <Stack direction="row" alignItems="center" spacing={1}>
          <RouterLink
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img
              src={logo2}
              alt="MedPass Logo"
              style={{
                height: "40px", // Adjust logo size
                marginRight: "8px", // Space between logo and text
              }}
            />
            <Typography
              variant="h5"
              sx={{
                color: "text.contrastText", // White text from theme
                fontWeight: "bold",
                letterSpacing: "2px",
                "&:hover": {
                  color: "secondary.main", // Secondary color on hover
                },
                transition: "color 0.3s ease",
              }}
            >
              MedPass
            </Typography>
          </RouterLink>
        </Stack>

        {/* Authentication Button */}
        {isAuthenticated && (
          <Button
            onClick={handleLogout}
            endIcon={<LogoutIcon />}
            sx={{
              color: "text.contrastText", // White text
              backgroundColor: "#5271FF", // Subtle classic blue background
              border: "1px solid", // Classic border
              borderColor: "#3C4A9E", // Darker blue for contrast
              borderRadius: "8px", // Rounded corners for professional look
              padding: "0.5rem 1.5rem",
              fontSize: "0.9rem", // Slightly smaller text size for refinement
              fontWeight: 500,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#3C4A9E", // Darker blue hover for emphasis
                borderColor: "#364ABF", // Slightly darker border
                transform: "scale(1.03)", // Subtle scale on hover
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)", // Light shadow for depth
              },
            }}
          >
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
