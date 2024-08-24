import React from "react";
import { Box, Typography, Card, CardContent, Container } from "@mui/material";
import {
  LocalShipping,
  Speed,
  Shield,
  Inbox,
  TrackChanges,
} from "@mui/icons-material";

const Services = () => {
  const services = [
    {
      title: "Transporting in all of Tunisia",
      description:
        "We offer comprehensive transportation services across Tunisia.",
      icon: <LocalShipping sx={{ fontSize: 60, color: "#003285" }} />,
    },
    {
      title: "Assure a fast connection with a transporter",
      description:
        "Our platform ensures quick and reliable connections with transporters.",
      icon: <Speed sx={{ fontSize: 60, color: "#003285" }} />,
    },
    {
      title: "Secure",
      description:
        "Your goods are transported safely with our secure services.",
      icon: <Shield sx={{ fontSize: 60, color: "#003285" }} />,
    },
    {
      title: "Transport all goods",
      description: "We handle all types of goods with care and efficiency.",
      icon: <Inbox sx={{ fontSize: 60, color: "#003285" }} />,
    },
    {
      title: "Tracking",
      description:
        "Track your shipments in real-time with our tracking system.",
      icon: <TrackChanges sx={{ fontSize: 60, color: "#003285" }} />,
    },
  ];

  return (
    <Box
      name="services"
      sx={{
        position: "relative",
        padding: "80px 20px",
        overflow: "hidden",
        backgroundColor: "white",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          align="center"
          color="#003285"
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
            justifyContent: "center",
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
                alignSelf: "normal",
                minHeight: "100%",
                textAlign: "center",
                borderRadius: "8px",
                padding: 2,

                width: "100%",
                maxWidth: "calc(33.333% - 16px)",
                boxShadow: 3,
                boxSizing: "border-box",
                backgroundColor: "#003285",
                color: "#FFF",
                "@media (max-width: 600px)": {
                  maxWidth: "100%",
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
                  borderRadius: "50%",
                  backgroundColor: "#FFF", // White background for the icons
                }}
              >
                {service.icon}
              </Box>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "center",
                  padding: 2,
                  flexGrow: 1,
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2">{service.description}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
