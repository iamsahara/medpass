import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5271FF", // Bright blue inspired by the logo
      light: "#7D95FF", // Lighter blue for hover and accents
      dark: "#364ABF", // Deeper blue for contrast
    },
    secondary: {
      main: "#FF6E6E", // Vibrant red from the logo
      light: "#FF8E8E", // Lighter red for hover and accents
      dark: "#CC5656", // Deeper red for contrast
    },
    background: {
      default: "#F8FAFF", // Very light blue for the main background
      paper: "#FFFFFF", // Bright white for cards and containers
    },
    text: {
      primary: "#2C3E50", // Deep navy blue from the logo
      secondary: "#718096", // Neutral gray for less important text
      contrastText: "#FFFFFF", // White text for contrast
    },
    action: {
      hover: "#EDF4FF", // Very light blue for hover states
      selected: "#DDEBFF", // Light blue for selected elements
    },
  },
  typography: {
    fontFamily: "Inter, Poppins, Arial, sans-serif", // Clean, modern sans-serif fonts
    h1: { fontWeight: 800, fontSize: "2.5rem", lineHeight: 1.2 },
    h2: { fontWeight: 700, fontSize: "2rem", lineHeight: 1.3 },
    h3: { fontWeight: 600, fontSize: "1.75rem", lineHeight: 1.4 },
    body1: { fontWeight: 400, fontSize: "1rem", lineHeight: 1.6 },
    button: {
      textTransform: "uppercase", // Consistent uppercase buttons
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px", // Rounded button shape
          padding: "10px 20px", // Larger button size
          transition: "transform 0.2s ease, background-color 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)", // Subtle hover lift effect
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
          borderRadius: "16px", // Rounded corners for cards
          boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.1)", // Subtle shadow
          backgroundColor: "#FFFFFF", // White for card surfaces
          overflow: "hidden",
          "&:hover": {
            boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.15)", // Stronger hover shadow
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          transition: "color 0.3s ease", // Smooth transition for text color
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
          backgroundColor: "#5271FF", // Bright blue for the header
          color: "#FFFFFF", // White text
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // Soft shadow
        },
      },
    },
  },
});

export default theme;
