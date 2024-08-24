import React from "react";
import Slider from "react-slick";
import { Box, Typography, Container, Card, CardContent } from "@mui/material";
import { Star } from "@mui/icons-material";
import { useTheme } from "../ThemeContext";

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
    adaptiveHeight: true,
  };
  const { theme } = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        padding: { xs: "40px 20px", sm: "80px 20px" },
        backgroundColor: theme.primary,
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          color="#fff"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          What Our Clients Say
        </Typography>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              sx={{
                width: "100%", // Ensure the slide takes up the full width
                padding: 0,
              }}
            >
              <Card
                sx={{
                  padding: { xs: 2, sm: 3 },
                  textAlign: "center",
                  boxShadow: 3,
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  color: theme.primary,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="#000"
                    sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
                  >
                    "{testimonial.testimonial}"
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
                  >
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
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default TestimonialCarousel;
