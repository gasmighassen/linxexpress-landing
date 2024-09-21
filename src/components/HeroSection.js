import React, { useEffect } from 'react';
import {
  Box,
  Button,
  Typography,
  Grid,
  Container,
  Card,
  CardMedia,
} from '@mui/material';
import easy from '../assets/easy.jpg';
import service from '../assets/24-service.jpg';
import payment from '../assets/payment.jpg';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const HeroSection = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a default duration of 1000ms
  }, []);

  return (
    <Box
      name='home'
      sx={{
        minHeight: '100vh',
        padding: '40px 0',
        color: '#ffffff',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container maxWidth='lg'>
        <Typography
          variant='h3'
          align='center'
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#ffffff', mb: 2 }}
          data-aos='fade-up' // Apply AOS animation here
        >
          {t('downloadText')}
        </Typography>
        <Typography
          variant='body1'
          align='center'
          sx={{ marginBottom: '40px', color: 'rgba(255, 255, 255, 0.8)' }}
          data-aos='fade-up' // Apply AOS animation
          data-aos-delay='200' // Delay animation
        >
          {t('paragraphText')}
        </Typography>

        <Grid container spacing={4} alignItems='stretch'>
          {/* Client App Section */}
          <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
            <Box
              sx={{
                backgroundColor: '#ffffff',
                padding: '30px',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              data-aos='fade-right' // AOS animation for sliding from the right
            >
              <Typography
                variant='h4'
                gutterBottom
                sx={{ fontWeight: 'bold', color: '#1a237e' }}
              >
                {t('downloadClient')}
              </Typography>
              <Typography variant='body1' paragraph sx={{ color: '#555' }}>
                {t('clientAppDesc')}
              </Typography>
              <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                  <Button
                    variant='contained'
                    color='primary'
                    size='large'
                    sx={{
                      minWidth: '200px',
                      fontWeight: 'bold',
                      backgroundColor: '#1a237e',
                    }}
                  >
                    {t('iosButton')}
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant='contained'
                    color='secondary'
                    size='large'
                    sx={{
                      minWidth: '200px',
                      fontWeight: 'bold',
                      backgroundColor: '#8e24aa',
                    }}
                  >
                    {t('androidButton')}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* Driver App Section */}
          <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
            <Box
              sx={{
                backgroundColor: '#ffffff',
                padding: '30px',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              data-aos='fade-left' // AOS animation for sliding from the left
            >
              <Typography
                variant='h4'
                gutterBottom
                sx={{ fontWeight: 'bold', color: '#1a237e' }}
              >
                {t('downloadDriver')}
              </Typography>
              <Typography variant='body1' paragraph sx={{ color: '#555' }}>
                {t('driverAppDesc')}
              </Typography>
              <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                  <Button
                    variant='contained'
                    color='primary'
                    size='large'
                    sx={{
                      minWidth: '200px',
                      fontWeight: 'bold',
                      backgroundColor: '#1a237e',
                    }}
                  >
                    {t('iosButton')}
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant='contained'
                    color='secondary'
                    size='large'
                    sx={{
                      minWidth: '200px',
                      fontWeight: 'bold',
                      backgroundColor: '#8e24aa',
                    }}
                  >
                    {t('androidButton')}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        {/* Feature Highlights */}
        <Box mt={8}>
          <Typography
            variant='h5'
            align='center'
            gutterBottom
            sx={{ color: '#ffffff' }}
            data-aos='zoom-in' // AOS zoom-in effect
          >
            {t('whyUseOurApps')}
          </Typography>
          <Grid container spacing={4} justifyContent='center'>
            <Grid item xs={12} md={4} data-aos='fade-up' data-aos-delay='300'>
              <Card
                sx={{
                  backgroundColor: '#ffffff',
                  padding: '20px',
                  textAlign: 'center',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  borderRadius: '12px',
                }}
              >
                <CardMedia
                  component='img'
                  height='140'
                  image={easy}
                  alt='Feature 1'
                />
                <Typography variant='h6' sx={{ mt: 2, color: '#1a237e' }}>
                  {t('easyToUse')}
                </Typography>
                <Typography variant='body2' sx={{ color: '#555' }}>
                  {t('easyToUseDesc')}
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} md={4} data-aos='fade-up' data-aos-delay='500'>
              <Card
                sx={{
                  backgroundColor: '#ffffff',
                  padding: '20px',
                  textAlign: 'center',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  borderRadius: '12px',
                }}
              >
                <CardMedia
                  component='img'
                  height='140'
                  image={payment}
                  alt='Feature 2'
                />
                <Typography variant='h6' sx={{ mt: 2, color: '#1a237e' }}>
                  {t('securePayments')}
                </Typography>
                <Typography variant='body2' sx={{ color: '#555' }}>
                  {t('securePaymentsDesc')}
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} md={4} data-aos='fade-up' data-aos-delay='700'>
              <Card
                sx={{
                  backgroundColor: '#ffffff',
                  padding: '20px',
                  textAlign: 'center',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  borderRadius: '12px',
                }}
              >
                <CardMedia
                  component='img'
                  height='140'
                  image={service}
                  alt='Feature 3'
                />
                <Typography variant='h6' sx={{ mt: 2, color: '#1a237e' }}>
                  {t('support24')}
                </Typography>
                <Typography variant='body2' sx={{ color: '#555' }}>
                  {t('support24Desc')}
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
