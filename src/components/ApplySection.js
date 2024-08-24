import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
} from "@mui/material";
import { useTheme } from "../ThemeContext";
import Blob2 from "../assets/blob/blob2.svg";
import Blob3 from "../assets/blob/blob3.svg";

const ApplySection = () => {
  const { theme } = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "#f4f4f4",
        padding: "40px 20px",
        textAlign: "center",
        position: "relative", // To position blobs absolutely within this container
        overflow: "hidden", // To prevent overflow from animated blobs
      }}
      id="apply"
    >
      {/* Blob 2 */}
      <Box
        component="img"
        src={Blob2}
        alt="Blob 2"
        sx={{
          position: "absolute",
          top: "10%",
          left: "10%",
          width: "200px", // Adjust size as needed
          height: "auto",
          zIndex: 0, // Behind the content
          animation: "blobSlideInApply 2s ease-out forwards",
          "@keyframes blobSlideInApply": {
            from: { transform: "translateX(-100%)" },
            to: { transform: "translateX(0)" },
          },
          display: { xs: "none", md: "block" }, // Hide on mobile
        }}
      />

      {/* Blob 3 */}
      <Box
        component="img"
        src={Blob3}
        alt="Blob 3"
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          width: "250px", // Adjust size as needed
          height: "auto",
          zIndex: 0, // Behind the content
          animation: "blobSlideInApply 2s ease-out forwards",
          animationDelay: "0.5s",
          "@keyframes blobSlideInApply": {
            from: { transform: "translateX(100%)" },
            to: { transform: "translateX(0)" },
          },
          display: { xs: "none", md: "block" }, // Hide on mobile
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ mb: 4, color: theme.primary }}
        >
          Apply to Be a Revendeur
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: 4 }}>
          Join our network of trusted resellers and help us expand our reach.
          Fill out the form below to apply.
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ maxWidth: 600, margin: "0 auto" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                required
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                required
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                required
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Company Name"
                variant="outlined"
                required
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                required
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: theme.primary,
                  color: theme.text,
                  "&:hover": {
                    backgroundColor: theme.primary,
                  },
                }}
              >
                Apply Now
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ApplySection;
