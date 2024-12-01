import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1E293B",
        color: "#9CA3AF",
        textAlign: "center",
        paddingY: 2,
      }}
    >
      {/* Top Line: Links */}
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

      {/* Bottom Line: Copyright */}
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} MedPass. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
