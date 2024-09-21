import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { useTheme } from '../ThemeContext';
import { useTranslation } from 'react-i18next'; // Import for translations
import { Link as ScrollLink } from 'react-scroll'; // Correctly import ScrollLink from react-scroll

const Footer = () => {
  const { theme } = useTheme();
  const { t } = useTranslation(); // Hook for translations

  return (
    <Box
      sx={{
        padding: '40px 20px',
        background: `linear-gradient(135deg, ${theme.primary} 0%, #003285 100%)`, // New gradient background
        color: '#fff', // White text for better contrast
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          {/* Company Section */}
          <Grid item xs={12} md={4}>
            <Typography
              variant='h6'
              gutterBottom
              sx={{ fontWeight: 'bold', fontFamily: "'Poppins', sans-serif" }}
            >
              Linxexpress
            </Typography>
            <Typography
              variant='body2'
              sx={{ fontSize: '0.9rem', color: '#ddd' }}
            >
              {t('footerDescription')} {/* Translated footer description */}
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} md={4}>
            <Typography
              variant='h6'
              gutterBottom
              sx={{ fontWeight: 'bold', fontFamily: "'Poppins', sans-serif" }}
            >
              {t('quickLinks')} {/* Translated "Quick Links" */}
            </Typography>

            {/* Scroll Links */}
            <ScrollLink
              to='home'
              smooth={true}
              duration={500}
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#ccc',
                cursor: 'pointer',
              }}
            >
              {t('home')} {/* Translated "Home" */}
            </ScrollLink>
            <ScrollLink
              to='services'
              smooth={true}
              duration={500}
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#ccc',
                cursor: 'pointer',
              }}
            >
              {t('services')} {/* Translated "Services" */}
            </ScrollLink>
            <ScrollLink
              to='contact'
              smooth={true}
              duration={500}
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#ccc',
                cursor: 'pointer',
              }}
            >
              {t('contact')} {/* Translated "Contact" */}
            </ScrollLink>
          </Grid>

          {/* Contact Info Section */}
          <Grid item xs={12} md={4}>
            <Typography
              variant='h6'
              gutterBottom
              sx={{ fontWeight: 'bold', fontFamily: "'Poppins', sans-serif" }}
            >
              {t('contactUs')} {/* Translated "Contact Us" */}
            </Typography>
            <Typography
              variant='body2'
              sx={{ fontSize: '0.9rem', color: '#ddd' }}
            >
              {t('phone')}: 51676461 {/* Translated "Phone" */}
            </Typography>
            <Typography
              variant='body2'
              sx={{ fontSize: '0.9rem', color: '#ddd' }}
            >
              {t('email')}: info@linxexpress.com {/* Translated "Email" */}
            </Typography>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box sx={{ marginTop: '2rem', textAlign: 'center' }}>
          <Typography
            variant='body2'
            sx={{ fontSize: '0.9rem', color: '#ccc' }}
          >
            © {new Date().getFullYear()} Linxexpress. {t('allRightsReserved')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
