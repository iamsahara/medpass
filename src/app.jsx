import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound/NotFound";


const theme = createTheme({
  palette: {
    primary: { main: '#00C853', light: '#B9F6CA', dark: '#009624' },
    secondary: { main: '#00ACC1', light: '#B2EBF2', dark: '#007C91' },
    background: { default: '#F8FBF9', paper: '#FFFFFF' },
    text: { primary: '#1B1B1B', secondary: '#4A4A4A' },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h6: { color: '#00C853', fontWeight: 'bold' },
  },
});

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleLogout = () => {
    setIsAuthenticated(false);
    console.log("Logged out");
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        <Box component="main" sx={{ minHeight: "80vh", mt: 8 }}>
          <Routes>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}
