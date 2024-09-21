import React from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import TestimonialCarousel from './components/Testimonials';
import ApplySection from './components/ApplySection';
import { ThemeProvider } from './ThemeContext';
import { useTranslation } from 'react-i18next';
import VideoBackground from './components/VideoBackground';
const AppContent = () => {
  const { i18n } = useTranslation(); // Import the i18n instance
  const lang = i18n.language;
  return (
    <Box
      sx={{
        direction: lang === 'ar' ? 'rtl' : 'ltr', // Apply RTL direction
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a237e 30%, #8e24aa 100%)',
        fontFamily: "'Lato', sans-serif",
      }}
    >
      <Navbar />
      <Box>
        <VideoBackground />
        <HeroSection />
        <Services />
        <TestimonialCarousel />
        <ApplySection />
        <ContactUs />
        <Footer />
      </Box>
    </Box>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
