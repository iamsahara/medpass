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
        gap: 1.5,
        marginTop: 3,
        padding: 2,
        borderRadius: 1.5,
        background: `linear-gradient(135deg, rgba(230, 230, 255, 0.5), rgba(200, 255, 250, 0.5))`, // Light and techy gradient
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)", // Light container shadow
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <Typography
        variant="body2"
        sx={{
          fontWeight: 700,
          fontSize: { xs: "0.9rem", sm: "1rem" },
          color: "text.primary",
        }}
      >
        Ready to Book?
      </Typography>

      {/* Button */}
      <Button
        variant="contained"
        size="small"
        startIcon={<Add />}
        onClick={() => navigate("/booking")}
        sx={{
          borderRadius: "24px",
          paddingX: 2,
          paddingY: 0.8,
          fontWeight: 600,
          fontSize: { xs: "0.75rem", sm: "0.85rem" },
          textTransform: "capitalize",
          background: `linear-gradient(135deg, #D6E4FF, #A3D8F4)`, // Lighter, modern gradient
          color: "#2D3436", // Dark text for contrast
          boxShadow: "0px 3px 6px rgba(163, 216, 244, 0.4)", // Light shadow
          transition: "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0px 6px 12px rgba(163, 216, 244, 0.6)", // Enhanced shadow on hover
            background: `linear-gradient(145deg, #C0E0FF, #92CDEB)`, // Slightly darker hover gradient
          },
        }}
      >
        Book Now
      </Button>
    </Box>
  );
};

export default AppointmentButton;
