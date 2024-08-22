import React from "react";
import { Box, Typography, Card, CardContent, Container } from "@mui/material";
import {
  LocalShipping,
  Speed,
  Shield,
  Inbox,
  TrackChanges,
} from "@mui/icons-material";
import { useTheme } from "../ThemeContext";

const Services = () => {
  const { theme } = useTheme();
  const isBlueTheme = theme.primary === "#003285";
  const services = [
    {
      title: "Transporting in all of Tunisia",
      description:
        "We offer comprehensive transportation services across Tunisia.",
      icon: <LocalShipping sx={{ fontSize: 60, color: theme.primary }} />,
    },
    {
      title: "Assure a fast connection with a transporter",
      description:
        "Our platform ensures quick and reliable connections with transporters.",
      icon: <Speed sx={{ fontSize: 60, color: theme.primary }} />,
    },
    {
      title: "Secure",
      description:
        "Your goods are transported safely with our secure services.",
      icon: <Shield sx={{ fontSize: 60, color: theme.primary }} />,
    },
    {
      title: "Transport all goods",
      description: "We handle all types of goods with care and efficiency.",
      icon: <Inbox sx={{ fontSize: 60, color: theme.primary }} />,
    },
    {
      title: "Tracking",
      description:
        "Track your shipments in real-time with our tracking system.",
      icon: <TrackChanges sx={{ fontSize: 60, color: theme.primary }} />,
    },
  ];

  return (
    <Box
      name="services"
      sx={{
        position: "relative", // To position the SVG background
        padding: "80px 20px",
        overflow: "hidden", // Hide any overflow from the SVG
        backgroundColor: isBlueTheme ? theme.primary : "white",
      }}
    >
      {/* SVG Background */}
      {/* <Box
        sx={{
          position: "absolute",
          top: -10,
          left: 0,
          width: "100%",
          height: "auto",
          overflow: "hidden",
          zIndex: 2,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FFF"
            fillOpacity="1"
            d="M0,96L40,85.3C80,75,160,53,240,42.7C320,32,400,32,480,26.7C560,21,640,11,720,32C800,53,880,107,960,106.7C1040,107,1120,53,1200,32C1280,11,1360,21,1400,26.7L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </Box> */}
      {/* <Box
        sx={{
          position: "absolute",
          bottom: -60,
          left: 0,
          width: "100%",
          height: "auto", // Adjust as needed
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FFF"
            fill-opacity="1"
            d="M0,128L30,138.7C60,149,120,171,180,197.3C240,224,300,256,360,240C420,224,480,160,540,160C600,160,660,224,720,240C780,256,840,224,900,218.7C960,213,1020,235,1080,245.3C1140,256,1200,256,1260,229.3C1320,203,1380,149,1410,122.7L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </Box> */}

      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          align="center"
          color={theme.primary}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Our Services
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center", // Center items horizontally
          }}
        >
          {services.map((service) => (
            <Card
              key={service.title}
              sx={{
                zIndex: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                borderRadius: "8px",
                padding: 2,
                height: "100%",
                minHeight: "320px", // Fixed minimum height for consistency
                width: "100%", // Ensure full width in flex container
                maxWidth: "calc(33.333% - 16px)", // Adjust for three cards per row with gap
                boxShadow: 3,
                boxSizing: "border-box", // Include padding and border in the width
                "@media (max-width: 600px)": {
                  maxWidth: "100%", // Full width on small screens
                },
              }}
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "80px",
                  width: "80px",
                  marginBottom: 2,
                  color: theme.text,
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                }}
              >
                {service.icon}
              </Box>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: 2,
                  flexGrow: 1,
                }}
              >
                <Typography variant="h6" gutterBottom color="#000">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
