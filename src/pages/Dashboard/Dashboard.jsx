import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Box,
  Grid,
  Card,
  CardContent,
  IconButton,
  Fab,
  Divider,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Notifications,
  Person,
  People,
  Settings,
  Add,
} from "@mui/icons-material";
import { useNavigate, NavLink } from "react-router-dom";

function DashboardPage() {
  const navigate = useNavigate();
  const doctorName = "Green";
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { text: "My Profile", icon: <Person />, path: "/profile" },
    { text: "Patients", icon: <People />, path: "/patients" },
    { text: "Specialists", icon: <Settings />, path: "/specialists" },
    { text: "Notifications", icon: <Notifications />, path: "/notifications" },
    { text: "Manage Referrals", icon: <Settings />, path: "/referrals" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Drawer
        variant="temporary"
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <NavLink
                to={item.path}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "blue" : "black",
                  width: "100%",
                })}
                onClick={() => setIsSidebarOpen(false)} // Close sidebar on navigation
              >
                <ListItemButton>
                  <ListItemText primary={item.text} />
                  {item.icon}
                </ListItemButton>
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, bgcolor: "#f9f9f9", minHeight: "100vh" }}>
        {/* AppBar */}
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={() => setIsSidebarOpen(true)}
              sx={{ marginRight: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Dashboard</Typography>
          </Toolbar>
        </AppBar>

        {/* Dashboard Content */}
        <Box sx={{ marginTop: 10, padding: 3 }}>
          {/* Welcome Section */}
          <Box
            sx={{
              backgroundColor: "#ffffff",
              padding: 3,
              borderRadius: 2,
              marginBottom: 4,
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography variant="h5" align="center">
              Welcome, Dr. {doctorName}!
            </Typography>
          </Box>

          {/* Dashboard Cards */}
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                <CardContent>
                  <Typography variant="h6">Approved Referrals</Typography>
                  <Typography variant="h4">12</Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                <CardContent>
                  <Typography variant="h6">Active Referrals</Typography>
                  <Typography variant="h4">8</Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                <CardContent>
                  <Typography variant="h6">Pending Referrals</Typography>
                  <Typography variant="h4">3</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Book Appointment Section */}
          <Box
            sx={{
              marginTop: 4,
              textAlign: "center",
              padding: 3,
              backgroundColor: "#ffffff",
              borderRadius: 2,
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography variant="h6">Book Appointment</Typography>
            <Fab
              color="primary"
              aria-label="add"
              onClick={() => navigate("/booking")}
              sx={{ marginTop: 2 }}
            >
              <Add />
            </Fab>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardPage;
