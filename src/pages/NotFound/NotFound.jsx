import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

function NotFound() {
  console.log("NotFound component rendered");
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 150px)",
        textAlign: "center",
      }}
    >
      {/* Page Title */}
      <Typography variant="h3" gutterBottom>
        Oops! Page Not Found
      </Typography>

      {/* Description */}
      <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
        It seems the page you are looking for does not exist or may have been moved.
      </Typography>

      {/* Back to Home Button */}
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
        sx={{ mt: 4 }}
      >
        Back to Home
      </Button>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.2);
              opacity: 0.7;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </Container>
  );
}

export default NotFound;
