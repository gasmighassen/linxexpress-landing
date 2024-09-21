import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Container, Card, CardContent } from '@mui/material';
import { Star } from '@mui/icons-material';
import { useTheme } from '../ThemeContext';
import { useTranslation } from 'react-i18next'; // Import for translations
import './testimonialCarousel.css'; // Import the custom CSS

const testimonials = [
  {
    name: 'O, Gasmi',
    role: 'Client',
    testimonial: 'testimonial1', // Use translation key
    rating: 5,
  },
  {
    name: 'G, Gasmi',
    role: 'Client',
    testimonial: 'testimonial2', // Use translation key
    rating: 4,
  },
  {
    name: 'A , Mizouri',
    role: 'Client',
    testimonial: 'testimonial3', // Use translation key
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  const { t } = useTranslation(); // Hook for translations
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    arrows: false,
    dotsClass: 'slick-dots custom-dots',
  };

  const { theme } = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        padding: { xs: '40px 20px', sm: '80px 20px' },
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <Container maxWidth='lg'>
        <Typography
          variant='h4'
          component='h2'
          gutterBottom
          color='#fff'
          sx={{
            fontWeight: 'bold',
            marginBottom: 5,
            fontFamily: "'Poppins', sans-serif",
          }}
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          {t('whatClientsSay')} {/* Translated section title */}
        </Typography>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              sx={{
                width: '100%',
                padding: { xs: 2, sm: 3 },
              }}
            >
              <Card
                sx={{
                  padding: { xs: 3, sm: 4 },
                  textAlign: 'center',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                  borderRadius: '16px',
                  backgroundColor: '#ffffff',
                  color: theme.primary,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  maxWidth: '800px',
                  margin: '0 auto',
                }}
                data-aos='fade-up'
                data-aos-duration='1200'
              >
                <CardContent>
                  <Typography
                    variant='h6'
                    gutterBottom
                    sx={{
                      fontSize: { xs: '1.25rem', sm: '1.5rem' },
                      fontWeight: 500,
                      color: '#000',
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    "{t(testimonial.testimonial)}"{' '}
                    {/* Translated testimonial */}
                  </Typography>
                  <Typography
                    variant='subtitle1'
                    color='textSecondary'
                    sx={{
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      fontStyle: 'italic',
                      color: '#666',
                    }}
                  >
                    - {testimonial.name}, {testimonial.role}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginTop: 2,
                    }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        sx={{ color: '#FFD700', fontSize: '1.5rem' }}
                      />
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
