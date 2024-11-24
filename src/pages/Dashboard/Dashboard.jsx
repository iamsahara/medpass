import React from "react";
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
  Fab,
} from "@mui/material";
import { Notifications, Person, People, Settings, Add } from "@mui/icons-material";
import { useNavigate, NavLink } from "react-router-dom"; 
import Button from "@mui/material/Button";

function DashboardPage() {
  const navigate = useNavigate(); 
  const doctorName = "Green"; 
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
        variant="permanent"
        sx={{ width: 240, flexShrink: 0 }}
        PaperProps={{ sx: { width: 240, boxSizing: "border-box" } }}
      >
        <Toolbar />
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
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        {/* Header */}
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Welcome, Dr. {doctorName}!
            </Typography>
            <Button
              color="inherit"
              onClick={() => {
                // Navigate to login page
                navigate("/login");
              }}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>

        {/* Dashboard Cards */}
        <Grid container spacing={3} sx={{ marginTop: 2 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Approved Referrals</Typography>
                <Typography variant="h4">12</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Active Referrals</Typography>
                <Typography variant="h4">8</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
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
            display: "flex",
            alignItems: "center",
           gap: "2rem",
            marginTop: 4,
          }}
        >
          <Typography variant="h6">Book Appointment</Typography>
          <Fab
            color="primary"
            aria-label="add"
            onClick={() => {
              // Navigate to booking page
              navigate("/booking");
            }}
          >
            <Add />
          </Fab>
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardPage;
