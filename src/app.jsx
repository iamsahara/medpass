import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import { PatientsProvider } from "./context/PatientsContext";
import { SpecialistsProvider } from "./context/SpecialistsContext";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Booking from "./pages/Booking/Booking";
import Patients from "./components/Patients/Patients";
import Specialists from "./components/Specialists/Specialists";
import HomePage from "./pages/HomePage/HomePage";
import theme from "./styles/theme";
import UserProfile from "./components/UserProfile/UserProfile";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = localStorage.getItem("token");

  if (token) {
    setIsAuthenticated(true);
  }

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
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
            <Box component="main" >
              <Routes>
                <Route path="/" element={!isAuthenticated ? <HomePage /> : <Navigate to='/dashboard' />} />
                <Route path="/login" element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to='/dashboard' />} />
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
            <Footer />
          </BrowserRouter>
        </SpecialistsProvider>
      </PatientsProvider>
    </ThemeProvider>
  );
}
