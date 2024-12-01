import { useState } from "react";
import { NavLink } from "react-router-dom";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader.jsx";
import StatsCard from "../../components/StatsCard/StatsCard.jsx";
import {
  Box,
  Typography,
  Grid,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Person,
  People,
  LocalHospital,
  Notifications,
  ManageHistory,
} from "@mui/icons-material";


function DashboardPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const cardsData = [
    { label: "Approved", value: 15, icon: <LocalHospital fontSize="large" />, gradient: "linear-gradient(90deg, #4A90E2, #357ABD)" },
    { label: "New Patients", value: 2, icon: <Person fontSize="large" />, gradient: "linear-gradient(90deg, #50B8A1, #3A8F7D)" },
    { label: "Pending", value: 1, icon: <Notifications fontSize="large" />, gradient: "linear-gradient(90deg, #9B51E0, #6D38B0)" },
    { label: "Completed", value: 15, icon: <People fontSize="large" />, gradient: "linear-gradient(90deg, #F2994A, #D87E2B)" },
    { label: "Appointments Today", value: 3, icon: <LocalHospital fontSize="large" />, gradient: "linear-gradient(90deg, #56CCF2, #2F80ED)" },
    { label: "Canceled", value: 1, icon: <Notifications fontSize="large" />, gradient: "linear-gradient(90deg, #EB5757, #D32F2F)" },
  ];
  const menuItems = [
    { text: "Profile", icon: <Person fontSize="small" />, path: "/profile" },
    { text: "Patients", icon: <People fontSize="small" />, path: "/patients" },
    { text: "Specialists", icon: <LocalHospital fontSize="small" />, path: "/specialists" },
    { text: "Notifications", icon: <Notifications fontSize="small" />, path: "/notifications" },
    { text: "Referrals", icon: <ManageHistory fontSize="small" />, path: "/referrals" },
  ];
  const drawerContent = (
    <Box sx={{ width: 250, padding: 2, backgroundColor: "#1E293B", height: "100%" }}>
      <Typography variant="h6" sx={{ color: "#FFF", marginBottom: 2 }}>
        Navigation
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <NavLink
              to={item.path}
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "#22C55E" : "#FFF",
                width: "100%",
              })}
            >
              <ListItemButton sx={{ borderRadius: 2, marginBottom: 1 }}>
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
    </Box>
  );

  return (
    <Box sx={{ backgroundColor: "#0F172A", position: "relative", overflow: "hidden" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(30, 41, 59, 0.8)",
          paddingY: 2,
          borderRadius: 2,
          marginBottom: 3,
          paddingX: 3,
          backdropFilter: "blur(10px)",
        }}
      >
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ display: { sm: "none" }, color: "#FFF" }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            gap: 2,
          }}
        >
          {menuItems.map((item) => (
            <NavLink
              key={item.text}
              to={item.path}
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "#22C55E" : "#FFF",
              })}
            >
              <Button
                startIcon={item.icon}
                sx={{
                  textTransform: "capitalize",
                  color: "inherit",
                  paddingX: 3,
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                }}
              >
                {item.text}
              </Button>
            </NavLink>
          ))}
        </Box>
      </Box>
      <Drawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250 },
        }}
      >
        {drawerContent}
      </Drawer>
      <Box
        sx={{
          background: "linear-gradient(135deg, rgba(30, 41, 59, 0.9), rgba(47, 58, 80, 0.9))",
          padding: { xs: 1, sm: 2 },
          borderRadius: "12px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
          color: "#FFF",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 2, sm: 4 },

        }}
      >
        <DashboardHeader />
      </Box>
      <Grid container spacing={3} sx={{ paddingX: { xs: 2, sm: 8 } }}>
        <Grid item xs={12}>
          <Box sx={{ borderRadius: 2, padding: 3, marginBottom: 4, color: "#FFF" }}>
            <Grid container spacing={3}>
              {cardsData.map((card, index) => (
                <Grid item xs={6} sm={4} md={2} key={index}>
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
        </Grid>
      </Grid>
    </Box>
  );
}

export default DashboardPage;
