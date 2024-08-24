import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "styled-components";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Link as ScrollLink } from "react-scroll";

const VideoBackground = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      {/* Background Video */}
      <Box
        component="video"
        autoPlay
        muted
        loop
        playsInline
        src="/bg-vid1.mp4" // Path to your video file
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1, // Ensures video is below the overlay
          controls: false, // Hide controls on mobile browsers
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 50, 133, 0.6)", // Semi-transparent overlay
          zIndex: 2, // Ensures overlay is above the video
        }}
      />

      {/* Centered Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 3, // Ensures content is above both video and overlay
          textAlign: "center",
          color: theme.text,
          maxWidth: "600px", // Adjust width to fit your design
          width: "100%",
          padding: "0 20px", // Add padding to ensure content doesn't touch edges
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            marginBottom: "20px",
            opacity: 0,
            animation: "fadeIn 1s ease-out forwards",
            "@keyframes fadeIn": {
              from: { opacity: 0 },
              to: { opacity: 1 },
            },
          }}
        >
          Linxexpress
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "1.25rem", sm: "1.5rem" },
            marginBottom: "40px",
            opacity: 0,
            animation: "fadeIn 1s ease-out 0.5s forwards",
          }}
        >
          Votre Lien de Confiance pour les Services de Transport à Travers la
          Tunisie
        </Typography>
      </Box>

      {/* Arrow Button */}
      <Box
        sx={{
          position: "absolute",
          bottom: "20px", // Adjust this value to control the distance from the bottom
          left: "50%",
          transform: "translateX(-50%)", // Center horizontally
          zIndex: 3, // Ensure button is above everything else
        }}
      >
        <ScrollLink to="home" smooth={true} duration={500}>
          <Button
            variant="contained"
            sx={{
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              color: theme.text,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              "&:hover": {
                backgroundColor: "white",
                opacity: 0.8,
              },
              animation: "bounce 1s infinite",
              "@keyframes bounce": {
                "0%, 20%, 50%, 80%, 100%": {
                  transform: "translateY(0)",
                },
                "40%": {
                  transform: "translateY(-10px)",
                },
                "60%": {
                  transform: "translateY(-5px)",
                },
              },
            }}
          >
            <ArrowDownwardIcon sx={{ color: "#003285" }} />
          </Button>
        </ScrollLink>
      </Box>
    </Box>
  );
};

export default VideoBackground;
