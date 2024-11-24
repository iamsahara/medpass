import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider} from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Booking from "./pages/Booking/Booking";
import Patients from "./components/Patients/Patients";
import Specialists from "./components/Specialists/Specialists";
import theme from "./styles/theme";
import { PatientsProvider } from "./context/PatientsContext"; 


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
      <BrowserRouter>
        <CssBaseline />
        {isAuthenticated && (
          <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        )}
        <Box component="main" sx={{ minHeight: "80vh", mt: 8 }}>
          <Routes>
            {/* If authenticated, render protected routes, otherwise redirect */}
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <Typography variant="h4" align="center">
                    Welcome to the App
                  </Typography>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/patients" element={<Patients/>} />
            <Route path="/specialists" element={<Specialists/>} />
            <Route path="/booking" element={<Booking />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </BrowserRouter>
      </PatientsProvider>
    </ThemeProvider>
  );
}
