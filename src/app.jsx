import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box, Typography } from "@mui/material";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Booking from "./pages/Booking/Booking";
import Patients from "./components/Patients/Patients";
import Specialists from "./components/Specialists/Specialists";
import HomePage from "./pages/HomePage/HomePage";
import theme from "./styles/theme";
import { PatientsProvider } from "./context/PatientsContext";
import { SpecialistsProvider } from "./context/SpecialistsContext";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    console.log("Logged in");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    console.log("Logged out");
  };

  return (
    <ThemeProvider theme={theme}>
      <PatientsProvider>
        <SpecialistsProvider>
          <BrowserRouter>
            <CssBaseline />
            {isAuthenticated && (
              <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
            )}
            <Box component="main" sx={{ minHeight: "80vh", mt: isAuthenticated ? 8 : 0 }}>
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                
                {/* Protected Routes */}
                {isAuthenticated ? (
                  <>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/patients" element={<Patients />} />
                    <Route path="/specialists" element={<Specialists />} />
                    <Route path="/booking" element={<Booking />} />
                  </>
                ) : (
                  // Redirect unauthenticated users to login
                  <Route path="*" element={<Navigate to="/login" />} />
                )}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Box>
          </BrowserRouter>
        </SpecialistsProvider>
      </PatientsProvider>
    </ThemeProvider>
  );
}
