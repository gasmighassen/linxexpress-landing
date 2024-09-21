import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from 'styled-components';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next'; // Import for translations

const VideoBackground = () => {
  const theme = useTheme();
  const { t } = useTranslation(); // Hook for translations

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        '@media (orientation: landscape)': {
          height: '70vh', // Adjust height for landscape mode
        },
      }}
    >
      {/* Background Video */}
      <Box
        component='video'
        autoPlay
        muted
        loop
        playsInline
        src='/bg-vid1.mp4' // Path to your video file
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1, // Ensures video is below the overlay
          '@media (orientation: landscape)': {
            objectFit: 'fill', // Ensures video fills the space in landscape mode
          },
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `${theme.primary}99`, // Semi-transparent overlay
          zIndex: 2, // Ensures overlay is above the video
        }}
      />

      {/* Centered Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 3, // Ensures content is above both video and overlay
          textAlign: 'center',
          color: theme.text,
          width: '100%',
          padding: '0 20px', // Add padding to ensure content doesn't touch edges
          '@media (orientation: landscape)': {
            padding: '0 10px', // Adjust padding for landscape mode
          },
        }}
      >
        {/* Linxexpress in a white background */}
        <Box
          sx={{
            backgroundColor: 'white',
            display: 'inline-block', // Makes the background fit the text
            padding: '10px', // Adjust padding as needed
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '10px',
          }}
        >
          <Typography
            variant='h5'
            component='h5'
            sx={{
              fontFamily: 'Lato, sans-serif',
              fontWeight: 600,
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
              color: theme.primary, // Set text color to primary
              textTransform: 'uppercase',
              letterSpacing: '1px',
              opacity: 0,
              animation: 'fadeIn 1s ease-out forwards',
              '@keyframes fadeIn': {
                from: { opacity: 0 },
                to: { opacity: 1 },
              },
            }}
          >
            Linxexpress
          </Typography>
        </Box>

        <Typography
          variant='h1'
          component='h1'
          gutterBottom
          sx={{
            fontFamily: 'Lato, sans-serif',
            fontWeight: 400,
            fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
            color: '#FFFFFF',
            lineHeight: 1.1,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '20px',
            opacity: 0,
            animation: 'fadeIn 1s ease-out 0.5s forwards',
            '@keyframes fadeIn': {
              from: { opacity: 0 },
              to: { opacity: 1 },
            },
            '@media (orientation: landscape)': {
              fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' }, // Adjust font size in landscape
            },
          }}
        >
          {t('welcomeText')} {/* Translation for the main heading */}
        </Typography>
      </Box>

      {/* Arrow Button */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          '@media (orientation: landscape)': {
            bottom: '10px', // Adjust position for landscape
          },
        }}
      >
        <ScrollLink to='home' smooth={true} duration={500}>
          <Button
            variant='contained'
            sx={{
              borderRadius: '50%',
              width: '60px',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              color: theme.text,
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              '&:hover': {
                backgroundColor: 'white',
                opacity: 0.8,
              },
              animation: 'bounce 1s infinite',
              '@keyframes bounce': {
                '0%, 20%, 50%, 80%, 100%': {
                  transform: 'translateY(0)',
                },
                '40%': {
                  transform: 'translateY(-10px)',
                },
                '60%': {
                  transform: 'translateY(-5px)',
                },
              },
            }}
          >
            <ArrowDownwardIcon sx={{ color: '#003285' }} />
          </Button>
        </ScrollLink>
      </Box>
    </Box>
  );
};

export default VideoBackground;
