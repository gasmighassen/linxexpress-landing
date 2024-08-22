import React from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Container,
} from "@mui/material";
import { useTheme } from "../ThemeContext";

const ContactUs = () => {
  const { theme } = useTheme();

  return (
    <Box
      name="contact"
      sx={{
        padding: "80px 20px",
        backgroundColor: "#fff",
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography
          color={theme.primary}
          variant="h4"
          component="h2"
          gutterBottom
        >
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "2rem" }}>
          Have any questions? We'd love to hear from you.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              sx={{ marginBottom: "1rem" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Your Email"
              variant="outlined"
              sx={{ marginBottom: "1rem" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Your Message"
              variant="outlined"
              multiline
              rows={4}
              sx={{ marginBottom: "1rem" }}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: theme.primary,
            color: theme.text,
            "&:hover": {
              backgroundColor: theme.primary,
            },
          }}
        >
          Send Message
        </Button>
      </Container>
    </Box>
  );
};

export default ContactUs;
