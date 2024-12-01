import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const StatsCard = ({ label, value, icon }) => {
  const theme = useTheme();

  // Dynamic Text Color based on label
  const getTextColor = () => {
    switch (label.toLowerCase()) {
      case "approved":
        return theme.palette.success.main; // Green for approved
      case "canceled":
        return theme.palette.error.main; // Red for canceled
      case "pending":
        return theme.palette.warning.main; // Yellow for pending
      default:
        return theme.palette.text.primary; // Default for others
    }
  };

  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.light}50, ${theme.palette.background.default}50)`, // Subtle gradient
        color: theme.palette.text.primary,
        borderRadius: "4px",
        padding: { xs: 1.5, sm: 2 },
        height: "auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: { xs: 1, sm: 2 },
        transition: "transform 0.3s ease, background-color 0.3s ease", // Smooth transitions
        "&:hover": {
          transform: "translateY(-2px)", // Slight hover lift
          backgroundColor: theme.palette.action.hover,
        },
      }}
    >
      {/* Icon with Hover Animation */}
      <Box
        sx={{
          fontSize: { xs: 28, sm: 36, md: 40 },
          color: theme.palette.primary.main,
          flexShrink: 0,
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.2) rotate(15deg)", // Scale and rotate icon on hover
          },
        }}
      >
        {icon}
      </Box>

      {/* Text Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          textAlign: "right",
          flexGrow: 1,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "0.7rem", sm: "0.85rem", md: "0.9rem" },
            color: theme.palette.text.secondary,
            lineHeight: 1.2,
          }}
        >
          {label}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
            color: getTextColor(), // Dynamic color for the value
          }}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatsCard;
