import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1E293B",
        color: "#9CA3AF",
        textAlign: "center",
        paddingY: 2,
        position:"static",
        height:"auto",
        margin:"auto",
        zIndex:1,
      }}
    >
      <Typography variant="body2" sx={{ marginBottom: 1 }}>
        <Link href="/about" underline="none" color="inherit" sx={{ marginX: 2 }}>
          About Us
        </Link>
        <Link href="/contact" underline="none" color="inherit" sx={{ marginX: 2 }}>
          Contact
        </Link>
        <Link href="/privacy" underline="none" color="inherit" sx={{ marginX: 2 }}>
          Privacy Policy
        </Link>
      </Typography>
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} MedPass. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
