import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const AppointmentButton = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        textAlign: "center",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontWeight: 600,
          fontSize: { xs: "0.8rem", sm: "1rem" }, 
          color: "#A5D6A7", 
          marginBottom: 0.5,
        }}
      >
        Book an Appointment
      </Typography>
      <Button
        variant="contained"
        onClick={() => navigate("/booking")}
        sx={{
          width: { xs: 50, sm: 60 }, 
          aspectRatio: "1/1",
          borderRadius: "50%", 
          background: `linear-gradient(135deg, #66BB6A, #43A047)`, 
          color: "#FFFFFF", 
          fontWeight: 600,
          boxShadow: "0px 3px 6px rgba(67, 160, 71, 0.3)", 
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px) scale(1.05)", 
            boxShadow: "0px 5px 10px rgba(67, 160, 71, 0.4)", 
            background: `linear-gradient(135deg, #81C784, #388E3C)`, 
          },
        }}
      >
        <Add sx={{ fontSize: { xs: "1.5rem", sm: "1.8rem" } }} /> 
      </Button>
    </Box>
  );
};

export default AppointmentButton;
