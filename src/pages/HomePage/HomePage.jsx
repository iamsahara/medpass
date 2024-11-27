import { Box, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

 function HomePage() {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    if (role === "physician") {
      navigate("/login");
    } else {
      alert(`${role} login is not available yet.`);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        bgcolor: "#f5f5f5",
        p: 3,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome to MedPass
      </Typography>
      <Typography variant="body1" gutterBottom>
        Please select your role to log in:
      </Typography>
      <Grid container spacing={3} sx={{ maxWidth: 400, mt: 3 }}>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => handleRoleSelect("physician")}
          >
            Physician Login
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            onClick={() => handleRoleSelect("specialist")}
          >
            Specialist Login
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            onClick={() => handleRoleSelect("patient")}
          >
            Patient Login
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomePage;
