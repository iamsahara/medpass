import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 320,    // Mobile
      sm: 760,  // Tablets
      lg: 1280, // Desktop
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#5271FF",
      light: "#7D95FF",
      dark: "#364ABF",
    },
    secondary: {
      main: "#FF6E6E",
      light: "#FF8E8E",
      dark: "#CC5656",
    },
    success: {
      main: "#4CAF50", // Green for success states
      dark: "#388E3C", // Darker green for hover states
      light: "#81C784", // Lighter green for accents
    },
    background: {
      default: "#F8FAFF",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#2C3E50",
      secondary: "#718096",
      contrastText: "#FFFFFF",
    },
    action: {
      hover: "#EDF4FF",
      selected: "#DDEBFF",
    },
  },
  typography: {
    fontFamily: "Inter, Poppins, Arial, sans-serif",
    h1: { fontWeight: 800, fontSize: "2.5rem", lineHeight: 1.2 },
    h2: { fontWeight: 700, fontSize: "2rem", lineHeight: 1.3 },
    h3: { fontWeight: 600, fontSize: "1.75rem", lineHeight: 1.4 },
    body1: { fontWeight: 400, fontSize: "1rem", lineHeight: 1.6 },
    button: {
      textTransform: "uppercase",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          padding: "10px 20px",
          transition: "transform 0.2s ease, background-color 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
          },
        },
        containedPrimary: {
          backgroundColor: "#5271FF",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#7D95FF",
          },
        },
        containedSecondary: {
          backgroundColor: "#FF6E6E",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#FF8E8E",
          },
        },
        containedSuccess: {
          backgroundColor: "#4CAF50",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#388E3C",
          },
        },
        outlinedPrimary: {
          borderColor: "#5271FF",
          color: "#5271FF",
          "&:hover": {
            borderColor: "#7D95FF",
            backgroundColor: "#EDF4FF",
          },
        },
        outlinedSecondary: {
          borderColor: "#FF6E6E",
          color: "#FF6E6E",
          "&:hover": {
            borderColor: "#FF8E8E",
            backgroundColor: "#FFE8E8",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#FFFFFF",
          overflow: "hidden",
          "&:hover": {
            boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.15)",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          transition: "color 0.3s ease",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
            "&.Mui-focused fieldset": {
              borderColor: "#5271FF",
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#5271FF",
          color: "#FFFFFF",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
        },
      },
    },
  },
});

export default theme;
