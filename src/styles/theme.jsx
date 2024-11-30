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
      main: "#6C5CE7",  // Modern soft purple
      light: "#A29BFE", // Pastel purple for hover effects
      dark: "#4C3D99",  // Darker purple for contrasts
    },
    secondary: {
      main: "#00CEC9",  // Aqua green for accents
      light: "#55EFC4", // Lighter aqua for hover states
      dark: "#00A89C",  // Dark aqua for depth
    },
    success: {
      main: "#00B894",  // Vibrant green
      dark: "#008973",  // Dark green for focus
      light: "#81E6D9", // Soft pastel green
    },
    background: {
      default: "#F9F9FB", // Light grayish-white for background
      paper: "#FFFFFF",   // Paper white
    },
    text: {
      primary: "#2D3436", // Charcoal for readability
      secondary: "#636E72", // Gray for subtle text
      contrastText: "#FFFFFF", // White for buttons and headers
    },
    action: {
      hover: "#F5F5FF", // Subtle hover effect
      selected: "#EBEFFD", // Slightly darker hover
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
          borderRadius: "12px",
          padding: "10px 24px",
          transition: "transform 0.3s ease, background-color 0.4s ease",
          "&:hover": {
            transform: "translateY(-3px)",
          },
        },
        containedPrimary: {
          backgroundColor: "#6C5CE7",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#A29BFE",
          },
        },
        containedSecondary: {
          backgroundColor: "#00CEC9",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#55EFC4",
          },
        },
        containedSuccess: {
          backgroundColor: "#00B894",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#81E6D9",
          },
        },
        outlinedPrimary: {
          borderColor: "#6C5CE7",
          color: "#6C5CE7",
          "&:hover": {
            borderColor: "#A29BFE",
            backgroundColor: "#F5F5FF",
          },
        },
        outlinedSecondary: {
          borderColor: "#00CEC9",
          color: "#00CEC9",
          "&:hover": {
            borderColor: "#55EFC4",
            backgroundColor: "#E0F9F5",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          boxShadow: "0px 6px 15px rgba(108, 92, 231, 0.2)",
          backgroundColor: "#FFFFFF",
          overflow: "hidden",
          "&:hover": {
            boxShadow: "0px 10px 30px rgba(108, 92, 231, 0.3)",
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
            borderRadius: "12px",
            "&.Mui-focused fieldset": {
              borderColor: "#6C5CE7",
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#6C5CE7",
          color: "#FFFFFF",
          boxShadow: "0px 4px 15px rgba(108, 92, 231, 0.4)",
        },
      },
    },
  },
});

export default theme;
