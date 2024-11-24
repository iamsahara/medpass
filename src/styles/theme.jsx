import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5A67D8", // Vibrant indigo
      light: "#798BFF", // Lighter indigo for hover
      dark: "#3C4A9E", // Deep indigo for contrast
    },
    secondary: {
      main: "#FF758F", // Vibrant pinkish-red
      light: "#FF97A8", // Lighter pink for hover
      dark: "#B24A5E", // Deep pink-red for contrast
    },
    background: {
      default: "#F7FAFC", // Soft off-white
      paper: "#FFFFFF", // White for cards
    },
    text: {
      primary: "#2D3748", // Rich dark gray
      secondary: "#718096", // Soft gray
      contrastText: "#FFFFFF", // White text for contrast
    },
    action: {
      hover: "#EDF2F7", // Light hover effect for all elements
      selected: "#E2E8F0", // Subtle selection highlight
    },
  },
  typography: {
    fontFamily: "Inter, Poppins, Arial, sans-serif", // Modern sans-serif combo
    h1: { fontWeight: 800, fontSize: "2.5rem", lineHeight: 1.2 },
    h2: { fontWeight: 700, fontSize: "2rem", lineHeight: 1.3 },
    h3: { fontWeight: 600, fontSize: "1.75rem", lineHeight: 1.4 },
    body1: { fontWeight: 400, fontSize: "1rem", lineHeight: 1.6 },
    button: {
      textTransform: "uppercase", // Modern uppercase buttons
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px", // Modern button shape
          padding: "10px 20px", // Larger button size
          transition: "transform 0.2s ease, background-color 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)", // Subtle hover lift effect
          },
        },
        containedPrimary: {
          backgroundColor: "#5A67D8",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#798BFF",
          },
        },
        containedSecondary: {
          backgroundColor: "#FF758F",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#FF97A8",
          },
        },
        outlinedPrimary: {
          borderColor: "#5A67D8",
          color: "#5A67D8",
          "&:hover": {
            borderColor: "#798BFF",
            backgroundColor: "#F7FAFC",
          },
        },
        outlinedSecondary: {
          borderColor: "#FF758F",
          color: "#FF758F",
          "&:hover": {
            borderColor: "#FF97A8",
            backgroundColor: "#FFF5F7",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px", // Rounded card corners
          boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.1)", // Stronger shadow
          backgroundColor: "#FFFFFF",
          overflow: "hidden", // Clean card edges
          "&:hover": {
            boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.15)", // Fancy hover shadow
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
              borderColor: "#5A67D8",
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#5A67D8",
          color: "#FFFFFF",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
        },
      },
    },
  },
});

export default theme;
