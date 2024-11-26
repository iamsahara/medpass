import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
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
import UserProfile from "./components/UserProfile/UserProfile";
import ProtectedRoute from "./utils/ProtectedRoute";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    console.log("Logged in");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
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
              <Header
                isAuthenticated={isAuthenticated}
                handleLogout={handleLogout}
              />
            )}
            <Box component="main" sx={{ minHeight: "80vh", mt: isAuthenticated ? 8 : 0 }}>
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />

                {/* Protected Routes */}
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/patients"
                  element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                      <Patients />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/specialists"
                  element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                      <Specialists />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/booking"
                  element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                      <Booking />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                      <UserProfile />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Box>
          </BrowserRouter>
        </SpecialistsProvider>
      </PatientsProvider>
    </ThemeProvider>
  );
}
