import React from "react";
import { Box, Typography, Link, Container, Grid } from "@mui/material";
import { useTheme } from "../ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <Box
      sx={{
        padding: "40px 20px",
        backgroundColor: theme.primary,
        color: theme.text,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Linxexpress
            </Typography>
            <Typography variant="body2">
              Your reliable partner in transportation across Tunisia.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link
              href="#home"
              color="inherit"
              sx={{ display: "block", marginBottom: "0.5rem" }}
            >
              Home
            </Link>
            <Link
              href="#services"
              color="inherit"
              sx={{ display: "block", marginBottom: "0.5rem" }}
            >
              Services
            </Link>
            <Link
              href="#contact"
              color="inherit"
              sx={{ display: "block", marginBottom: "0.5rem" }}
            >
              Contact
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">Phone: 51676461</Typography>
            <Typography variant="body2">Email: info@linxexpress.com</Typography>
          </Grid>
        </Grid>
        <Box sx={{ marginTop: "2rem", textAlign: "center" }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Linxexpress. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
