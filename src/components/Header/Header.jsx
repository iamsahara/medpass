import React from "react";
import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { useTheme } from "@mui/material/styles";
import logo3 from "../../assets/Image/logo3.png";

const Header = ({ isAuthenticated, handleLogout }) => {
  const theme = useTheme();

  return (
    <Box sx={{ position: "relative", height: "30vh", overflow: "hidden" }}>
      {/* Background Video */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          overflow: "hidden",
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectFit: "cover",
            filter: "brightness(0.9) blur(1px)",
            transition: "all 0.5s ease-in-out",
          }}
        >
          <source src="./src/assets/videos/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Gradient Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(180deg, rgba(0,0,0,0.5), rgba(0,0,0,0.2))",
          }}
        ></Box>
      </Box>

      {/* Header Content */}
      <AppBar
        position="static"
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
          borderBottom: `2px solid ${theme.palette.primary.light}`, // Bottom border for separation
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Slight elevation
          paddingX: { xs: 2, sm: 3 },
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          {/* App Logo */}
          <RouterLink
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
             <Box
              component="img"
              src={logo3}
              alt="MedPass Logo"
              sx={{
                height: { xs: 40, sm: 50 }, // Responsive logo size
                marginRight: 1.5,
              }}
            />
          </RouterLink>

          {/* Buttons */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <RouterLink
              to="/dashboard"
              style={{
                textDecoration: "none",
              }}
            >
              <Button
                variant="contained"
                color="success"
                sx={{
                  paddingX: 3,
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textTransform: "capitalize",
                }}
              >
                Dashboard
              </Button>
            </RouterLink>
            {isAuthenticated && (
              <Button
                onClick={handleLogout}
                endIcon={<LogoutIcon />}
                variant="outlined"
                color="primary"
                sx={{
                  paddingX: 3,
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textTransform: "capitalize",
                  color: theme.palette.primary.main,
                  borderColor: theme.palette.primary.main,
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
