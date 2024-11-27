import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import {
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
} from "@mui/material";
import {
  Menu as MenuIcon,
  Notifications,
  Person,
  People,
  Add,
  LocalHospital,
  ManageHistory,
} from "@mui/icons-material";

function DashboardPage() {
  const navigate = useNavigate();
  const doctorName = "Green";
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const menuItems = [
    { text: "My Profile", icon: <Person />, path: "/profile" },
    { text: "Patients", icon: <People />, path: "/patients" },
    { text: "Specialists", icon: <LocalHospital />, path: "/specialists" },
    { text: "Notifications", icon: <Notifications />, path: "/notifications" },
    { text: "Manage Referrals", icon: <ManageHistory />, path: "/referrals" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="persistent"
        open={isSidebarOpen}
        sx={{
          width: isSidebarOpen ? 240 : 0,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: isSidebarOpen ? 240 : 0,
            backgroundColor: "action.hover", 
            color: "#364ABF",
            transition: "width 0.3s",
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <NavLink
                to={item.path}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "#FF6E6E" : "inherit",
                  width: "100%",
                })}
              >
                <ListItemButton
                  sx={{
                    borderRadius: "8px", 
                    padding: "10px 20px", 
                    margin: "5px 10px", 
                    "&:hover": {
                      backgroundColor: "action.hover", 
                      color: "primary.light", 
                    },
                    "&.Mui-selected": {
                      backgroundColor: "action.selected", 
                      color: "secondary.main", 
                      "&:hover": {
                        backgroundColor: "secondary.light", 
                      },
                    },
                  }}
                >
                  {item.icon}
                  <ListItemText
                    primary={item.text}
                    sx={{
                      marginLeft: "10px",
                      color: "inherit",
                      fontSize: "1rem",
                      fontWeight: 500,
                    }}
                  />
                </ListItemButton>
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            backgroundColor: "background.paper",
            padding: 3,
            borderRadius: 2,
            marginBottom: 4,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            sx={{
              marginRight: 2,
              backgroundColor: "action.hover",
              borderRadius: "50%",
              padding: 1,
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            Welcome, Dr. {doctorName}!
          </Typography>
        </Box>
        <Box sx={{ padding: 3 }}>
          <Grid container spacing={3}>
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              marginTop: 4,
              justifyContent: "center",
            }}
          >
            <Typography variant="h6">Book Appointment</Typography>
            <Fab
              color="primary"
              aria-label="add"
              onClick={() => {
                navigate("/booking");
              }}
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
