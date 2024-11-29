import React from "react";
import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { useTheme } from "@mui/material/styles";

const Header = ({ isAuthenticated, handleLogout }) => {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.primary.main,
        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
        padding: { xs: "0 0.5rem", sm: "0 1rem" },
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          alignItems: "right",
          flexDirection: { xs: "row", sm: "row" },
          paddingY: { xs: 1, sm: 0 },
        }}
      >
        {/* App Name */}
        <RouterLink
          to="/"
          style={{
            display: "flex",
            alignItems: "right",
            textDecoration: "none",
          }}
        >
          <Button
            variant="h5"
            sx={{
              color: theme.palette.text.contrastText,
              backgroundColor: theme.palette.success.main,
              borderRadius: "50px",
              padding: { xs: "0.3rem 1rem", sm: "0.5rem 1.5rem" },
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
              fontWeight: 600,
              marginTop: { xs: "1rem", sm: 0 },
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: theme.palette.success.dark,
                transform: "scale(1.05)",
                boxShadow: "0px 6px 15px rgba(56, 142, 60, 0.5)",
              },
            }}
          >
            Dashboard
          </Button>
        </RouterLink>
        {isAuthenticated && (
          <Button
            onClick={handleLogout}
            endIcon={<LogoutIcon />}
            sx={{
              color: theme.palette.text.contrastText,
              backgroundColor: theme.palette.success.main,
              borderRadius: "50px",
              padding: { xs: "0.3rem 1rem", sm: "0.5rem 1.5rem" },
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
              fontWeight: 600,
              marginTop: { xs: "1rem", sm: 0 },
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: theme.palette.success.dark,
                transform: "scale(1.05)",
                boxShadow: "0px 6px 15px rgba(56, 142, 60, 0.5)",
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
