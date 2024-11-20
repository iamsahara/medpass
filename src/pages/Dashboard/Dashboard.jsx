import React from 'react';
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
} from '@mui/material';
import { Notifications, Person, People, Settings, Add } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import Button from '@mui/material/Button';

function DashboardPage() {
  const navigate = useNavigate(); // Hook for navigation

  const doctorName = "Green"; // Placeholder value, replace with dynamic data

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{ width: 240, flexShrink: 0 }}
        PaperProps={{ sx: { width: 240, boxSizing: 'border-box' } }}
      >
        <Toolbar />
        <List>
          {[
            { text: 'My Profile', icon: <Person /> },
            { text: 'Patients', icon: <People /> },
            { text: 'Specialists', icon: <Settings /> },
            { text: 'Notifications', icon: <Notifications /> },
            { text: 'Manage Referrals', icon: <Settings /> },
          ].map((item, index) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemText primary={item.text} />
                {item.icon}
              </ListItemButton>
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
                navigate('/login');
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
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
          <Typography variant="h6">Book Appointment</Typography>
          <Fab
            color="primary"
            aria-label="add"
            onClick={() => {
              // Navigate to booking page
              navigate('/booking');
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
