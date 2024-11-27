import React from "react";
import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import logo2 from "../../assets/Image/logo2.png";

const Header = ({ isAuthenticated, handleLogout }) => {
  return (
    <AppBar
      sx={{
        backgroundColor: "primary.main",
        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
        padding: "0 1rem",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
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
                height: "40px",
                marginRight: "8px",
              }}
            />
            <Typography
              variant="h5"
              sx={{
                color: "text.contrastText",
                fontWeight: "bold",
                letterSpacing: "2px",
                "&:hover": {
                  color: "secondary.main",
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
              color: "text.contrastText",
              backgroundColor: "#5271FF",
              border: "1px solid",
              borderColor: "#3C4A9E",
              borderRadius: "8px",
              padding: "0.5rem 1.5rem",
              fontSize: "0.9rem",
              fontWeight: 500,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#3C4A9E",
                borderColor: "#364ABF",
                transform: "scale(1.03)",
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
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
