import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 320, // Mobile
      sm: 760, // Tablets
      lg: 1280, // Desktop
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#6C5CE7", // Modern soft purple
      light: "#A29BFE", // Pastel purple for hover effects
      dark: "#4C3D99", // Darker purple for contrasts
    },
    secondary: {
      main: "#00CEC9", // Aqua green for accents
      light: "#55EFC4", // Lighter aqua for hover states
      dark: "#00A89C", // Dark aqua for depth
    },
    success: {
      main: "#00B894", // Vibrant green
      dark: "#008973", // Dark green for focus
      light: "#81E6D9", // Soft pastel green
    },
    background: {
      default: "#F9F9FB", // Light grayish-white for background
      paper: "#FFFFFF", // Paper white
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
    h4: { fontWeight: 600, fontSize: "1.5rem", lineHeight: 1.4 },
    body1: { fontWeight: 400, fontSize: "1rem", lineHeight: 1.6 },
    body2: { fontWeight: 400, fontSize: "0.9rem", lineHeight: 1.6 },
    button: {
      textTransform: "capitalize", // Matches the dashboard style
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "24px", // Matches dashboard button style
          padding: "8px 16px",
          fontSize: "0.9rem",
          fontWeight: 600,
          textTransform: "capitalize",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0px 6px 15px rgba(108, 92, 231, 0.2)",
          },
        },
        containedPrimary: {
          background: "linear-gradient(135deg, #6C5CE7, #4C3D99)",
          color: "#FFFFFF",
          "&:hover": {
            background: "linear-gradient(135deg, #A29BFE, #6C5CE7)",
          },
        },
        containedSecondary: {
          background: "linear-gradient(135deg, #00CEC9, #00A89C)",
          color: "#FFFFFF",
          "&:hover": {
            background: "linear-gradient(135deg, #55EFC4, #00CEC9)",
          },
        },
        containedSuccess: {
          background: "linear-gradient(135deg, #00B894, #008973)",
          color: "#FFFFFF",
          "&:hover": {
            background: "linear-gradient(135deg, #81E6D9, #00B894)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          background: "linear-gradient(135deg, #FFFFFF, #F9F9FB)", // Light gradient
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.02)", // Slight lift
            boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "linear-gradient(135deg, #6C5CE7, #4C3D99)",
          boxShadow: "0px 4px 12px rgba(108, 92, 231, 0.4)",
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
            borderRadius: "16px",
            padding: "8px 12px",
            "&.Mui-focused fieldset": {
              borderColor: "#6C5CE7",
            },
          },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          background: "linear-gradient(135deg, #6C5CE7, #4C3D99)",
          color: "#FFFFFF",
          boxShadow: "0px 4px 8px rgba(108, 92, 231, 0.3)",
          "&:hover": {
            background: "linear-gradient(135deg, #A29BFE, #6C5CE7)",
            boxShadow: "0px 6px 12px rgba(108, 92, 231, 0.4)",
          },
        },
      },
    },
  },
});

export default theme;
