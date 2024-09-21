import React, { useEffect } from 'react';
import { Box, Typography, Card, CardContent, Container } from '@mui/material';
import {
  LocalShipping,
  Speed,
  Shield,
  Inbox,
  TrackChanges,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next'; // Import for translations
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Services = () => {
  const { t } = useTranslation(); // Hook for translations

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with default duration
  }, []);

  const services = [
    {
      title: t('transportTitle'),
      description: t('transportDesc'),
      icon: <LocalShipping sx={{ fontSize: 60, color: '#8e24aa' }} />,
    },
    {
      title: t('fastConnectionTitle'),
      description: t('fastConnectionDesc'),
      icon: <Speed sx={{ fontSize: 60, color: '#8e24aa' }} />,
    },
    {
      title: t('secureServicesTitle'),
      description: t('secureServicesDesc'),
      icon: <Shield sx={{ fontSize: 60, color: '#8e24aa' }} />,
    },
    {
      title: t('transportGoodsTitle'),
      description: t('transportGoodsDesc'),
      icon: <Inbox sx={{ fontSize: 60, color: '#8e24aa' }} />,
    },
    {
      title: t('realTimeTrackingTitle'),
      description: t('realTimeTrackingDesc'),
      icon: <TrackChanges sx={{ fontSize: 60, color: '#8e24aa' }} />,
    },
  ];

  return (
    <Box
      name='services'
      sx={{
        position: 'relative',
        padding: '80px 20px',
        color: '#FFF',
      }}
    >
      <Container maxWidth='lg'>
        <Typography
          variant='h4'
          component='h2'
          align='center'
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#ffffff',
            mb: 5,
            fontFamily: "'Poppins', sans-serif",
          }}
          data-aos='fade-up' // AOS animation on the heading
        >
          {t('servicesTitle')} {/* Translated title for services section */}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 3,
          }}
        >
          {services.map((service, index) => (
            <Card
              key={service.title}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: '16px',
                padding: 3,
                width: '100%',
                maxWidth: 'calc(33.333% - 24px)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                color: '#1a237e',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
                },
                '@media (max-width: 960px)': {
                  maxWidth: '100%',
                },
              }}
              data-aos='fade-up' // AOS animation for each card
              data-aos-delay={`${index * 100}`} // Add delay to stagger animations
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100px',
                  width: '100px',
                  marginBottom: 3,
                  borderRadius: '50%',
                  background: '#fff',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                }}
              >
                {service.icon}
              </Box>
              <CardContent>
                <Typography
                  variant='h6'
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '1.2rem',
                    color: '#8e24aa',
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant='body2'
                  sx={{
                    color: '#555',
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
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
