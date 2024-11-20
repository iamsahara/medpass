import { createTheme} from "@mui/system";
const theme = createTheme({
    palette: {
      mode: "light", // Light theme
      primary: {
        main: "#000000", // Black for primary elements
        light: "#333333", // Lighter black for hover effects
        dark: "#000000", // Keep dark as pure black
      },
      secondary: {
        main: "#FFFFFF", // White for secondary elements
        light: "#F5F5F5", // Slightly off-white for contrast
        dark: "#E0E0E0", // Light gray for secondary hover
      },
      background: {
        default: "#FFFFFF", // White background
        paper: "#F9F9F9", // Subtle grayish-white for cards and containers
      },
      text: {
        primary: "#000000", // Black text
        secondary: "#4A4A4A", // Dark gray text for less emphasis
      },
      common: {
        black: "#000000",
        white: "#FFFFFF", // Ensure 'white' is defined here
      },
    },
    typography: {
      fontFamily: "Roboto, Arial, sans-serif",
      h1: { color: "#000000", fontWeight: 700 }, // Bold black for headers
      h2: { color: "#000000", fontWeight: 600 },
      body1: { color: "#000000", fontWeight: 400 }, // Black for body text
      button: {
        textTransform: "none", // No uppercase for buttons
        fontWeight: 500, // Bold text for buttons
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "4px", // Subtle rounded corners
            textTransform: "none", // No uppercase text
            fontWeight: 500,
          },
          containedPrimary: {
            backgroundColor: "#000000", // Black buttons
            color: "#FFFFFF", // White text
            "&:hover": {
              backgroundColor: "#333333", // Slightly lighter black on hover
            },
          },
          containedSecondary: {
            backgroundColor: "#FFFFFF", // White buttons
            color: "#000000", // Black text
            "&:hover": {
              backgroundColor: "#F5F5F5", // Subtle grayish-white on hover
            },
          },
          outlinedPrimary: {
            borderColor: "#000000", // Black outline
            color: "#000000", // Black text
            "&:hover": {
              borderColor: "#333333", // Slightly lighter black on hover
              color: "#333333",
            },
          },
          outlinedSecondary: {
            borderColor: "#FFFFFF", // White outline
            color: "#FFFFFF", // White text
            "&:hover": {
              borderColor: "#F5F5F5", // Subtle gray on hover
              color: "#F5F5F5",
            },
          },
        },
      },
    },
  });

  export default theme;