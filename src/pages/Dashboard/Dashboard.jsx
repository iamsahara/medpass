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
  IconButton,
  Button,
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
import StatsCard from "../../components/StatsCard/StatsCard.jsx"
import AppointmentButton from "../../components/AppointmentButton/AppointmentButton.jsx";

function DashboardPage() {
  const navigate = useNavigate();
  const doctorName = "Green";
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const cardsData = [
    { label: "Approved", value: 15, icon: <LocalHospital />, gradient: "#4A90E2, #357ABD" },
    { label: "New Patients", value: 24, icon: <Person />, gradient: "#50B8A1, #3A8F7D" },
    { label: "Pending", value: 7, icon: <Notifications />, gradient: "#9B51E0, #6D38B0" },
    { label: "Completed", value: 18, icon: <People />, gradient: "#F2994A, #D87E2B" },
    { label: "Appointments Today", value: 12, icon: <LocalHospital />, gradient: "#56CCF2, #2F80ED" },
    { label: "Canceled", value: 3, icon: <Notifications />, gradient: "#EB5757, #D32F2F" },
  ];

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
        <Box sx={{ padding: 1 }}>
      <Grid
        container
        spacing={1}
        justifyContent="center"
        sx={{
          paddingX: { xs: 1, sm: 2 },
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        {cardsData.map((card, index) => (
          <Grid item xs={12} sm={4} md={2} key={index}>
            <StatsCard
              label={card.label}
              value={card.value}
              icon={card.icon}
              gradient={card.gradient}
            />
          </Grid>
        ))}
      </Grid>
    </Box>

    <AppointmentButton />

      </Box>
    </Box>
  );
}

export default DashboardPage;
