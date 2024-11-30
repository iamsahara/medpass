import React from "react";
import { Card, Box, Typography, useTheme } from "@mui/material";

const StatsCard = ({ label, value, icon }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.light}, #E3F2FD)`,
        color: theme.palette.text.primary,
        borderRadius: "12px", // Slightly smaller rounding for compact design
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
        height: { xs: 50, sm: 60 }, // Reduced height to half
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        overflow: "hidden",
        position: "relative",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "translateY(-2px) scale(1.02)", // Subtle hover lift
          boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "90%",
          height: "90%",
          gap: 0.5, // Reduced gap for smaller content spacing
        }}
      >
        {/* Icon */}
        <Box
          sx={{
            fontSize: { xs: 20, sm: 24 }, // Smaller icon size
            color: theme.palette.secondary.main,
          }}
        >
          {icon}
        </Box>

        {/* Text Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: 0.3, // Reduced vertical spacing
            width: "100%",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "0.6rem", sm: "0.75rem" }, // Smaller font for labels
              color: theme.palette.text.secondary,
            }}
          >
            {label}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "0.9rem", sm: "1.1rem" }, // Proportionally smaller value size
              color: theme.palette.text.primary,
            }}
          >
            {value}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default StatsCard;
