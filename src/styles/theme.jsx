import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light", // Light theme
    primary: {
      main: "#4A90E2", // Soft modern blue
      light: "#6FB7FF", // Lighter blue for hover effects
      dark: "#003A75", // Deep navy blue for contrast
    },
    secondary: {
      main: "#FF6F61", // Vibrant coral for secondary elements
      light: "#FFA094", // Lighter coral for hover effects
      dark: "#B23A31", // Deep coral for secondary contrast
    },
    background: {
      default: "#F5F7FA", // Soft grayish-blue background
      paper: "#FFFFFF", // White for cards and containers
    },
    text: {
      primary: "#1C1C1C", // Almost black for primary text
      secondary: "#5A5A5A", // Medium gray for less emphasis
    },
  },
  typography: {
    fontFamily: "Poppins, Arial, sans-serif", // Clean modern font
    h1: { color: "#1C1C1C", fontWeight: 700 }, // Bold, dark headers
    h2: { color: "#1C1C1C", fontWeight: 600 },
    body1: { color: "#1C1C1C", fontWeight: 400 }, // Clean body text
    button: {
      textTransform: "none", // No uppercase for buttons
      fontWeight: 500, // Medium weight for buttons
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px", // Slightly more rounded corners
          textTransform: "none", // No uppercase text
          fontWeight: 500,
        },
        containedPrimary: {
          backgroundColor: "#4A90E2", // Soft blue buttons
          color: "#FFFFFF", // White text
          "&:hover": {
            backgroundColor: "#6FB7FF", // Lighter blue on hover
          },
        },
        containedSecondary: {
          backgroundColor: "#FF6F61", // Vibrant coral buttons
          color: "#FFFFFF", // White text
          "&:hover": {
            backgroundColor: "#FFA094", // Lighter coral on hover
          },
        },
        outlinedPrimary: {
          borderColor: "#4A90E2", // Blue outline
          color: "#4A90E2", // Blue text
          "&:hover": {
            borderColor: "#6FB7FF", // Lighter blue outline
            color: "#6FB7FF",
          },
        },
        outlinedSecondary: {
          borderColor: "#FF6F61", // Coral outline
          color: "#FF6F61", // Coral text
          "&:hover": {
            borderColor: "#FFA094", // Lighter coral outline
            color: "#FFA094",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px", // Modern rounded corners
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow
          backgroundColor: "#FFFFFF", // White card background
        },
      },
    },
  },
});

export default theme;
