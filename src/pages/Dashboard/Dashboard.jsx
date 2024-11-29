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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { text: "My Profile", icon: <Person />, path: "/profile" },
    { text: "Patients", icon: <People />, path: "/patients" },
    { text: "Specialists", icon: <LocalHospital />, path: "/specialists" },
    { text: "Notifications", icon: <Notifications />, path: "/notifications" },
    { text: "Manage Referrals", icon: <ManageHistory />, path: "/referrals" },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {/* Sidebar */}
      <Drawer
        variant="temporary" // Full-screen on mobile
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "100%", sm: 240 }, // Full-width on mobile, fixed on tablet/desktop
            backgroundColor: "action.hover",
            color: "#364ABF",
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Menu</Typography>
          <IconButton onClick={() => setIsSidebarOpen(false)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
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
                <ListItemButton>
                  {item.icon}
                  <ListItemText
                    primary={item.text}
                    sx={{ marginLeft: "10px", fontWeight: 500 }}
                  />
                </ListItemButton>
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        {/* Header */}
        <Box
          sx={{
            backgroundColor: "background.paper",
            padding: 2,
            borderRadius: 2,
            marginBottom: 4,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
          }}
        >
          <IconButton
            onClick={() => setIsSidebarOpen(true)} // Open sidebar
            sx={{
              backgroundColor: "action.hover",
              borderRadius: "50%",
              padding: 1,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 500,
              textAlign: { xs: "center", sm: "left" },
              flexGrow: 1,
            }}
          >
            Welcome, Dr. {doctorName}!
          </Typography>
        </Box>

        {/* Cards Section */}
        <Box sx={{ padding: 3 }}>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{
              paddingX: { xs: 0, sm: 2, md: 4 },
              maxWidth: { sm: "100%", md: "1280px" },
              margin: "0 auto",
            }}
          >
            {/* Approved Referrals */}
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" textAlign="center">
                    Approved Referrals
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "primary.main",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    12
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Active Referrals */}
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" textAlign="center">
                    Active Referrals
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "primary.main",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    8
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Pending Referrals */}
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" textAlign="center">
                    Pending Referrals
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "primary.main",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    3
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Appointment Button */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            marginTop: 4,
            justifyContent: "center",
          }}
        >
          <Typography variant="h6">Book Appointment</Typography>
          <Fab
            color="primary"
            aria-label="add"
            onClick={() => navigate("/booking")}
            sx={{
              position: "relative",
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
