import React from "react";
import Slider from "react-slick";
import { Box, Typography, Container, Card, CardContent } from "@mui/material";
import { Star } from "@mui/icons-material";
import { useTheme } from "../ThemeContext";

// Sample testimonials
const testimonials = [
  {
    name: "John Doe",
    role: "Customer",
    testimonial:
      "The service was fantastic! I was able to connect with a transporter quickly and easily.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    role: "Client",
    testimonial:
      "Highly recommend! The tracking feature was very helpful, and the whole process was smooth.",
    rating: 4,
  },
  {
    name: "Alice Johnson",
    role: "User",
    testimonial:
      "Great experience. The customer support was excellent and the service met all my expectations.",
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const { theme } = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        padding: "80px 20px",
        backgroundColor: theme.primary, // Blue background color
        color: "#fff", // White text color for contrast
      }}
    >
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
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          align="center"
          color="#fff" // White text color for the header
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          What Our Clients Say
        </Typography>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              sx={{
                padding: 3,
                textAlign: "center",
                boxShadow: 3,
                borderRadius: "8px",
                backgroundColor: "#fff", // White background for cards
                color: theme.primary, // Blue text color for cards
              }}
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <CardContent>
                <Typography variant="h6" gutterBottom color="#000">
                  "{testimonial.testimonial}"
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  - {testimonial.name}, {testimonial.role}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 1,
                  }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} sx={{ color: "#FFD700" }} />
                  ))}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default TestimonialCarousel;
