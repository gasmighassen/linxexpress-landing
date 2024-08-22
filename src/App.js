import React from "react";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import TestimonialCarousel from "./components/Testimonials";
import ApplySection from "./components/ApplySection";
import { ThemeProvider, useTheme } from "./ThemeContext";
import { useTranslation } from "react-i18next";
import VideoBackground from "./components/VideoBackground";
const AppContent = () => {
  const { isRtl } = useTheme();
  const { i18n } = useTranslation(); // Import the i18n instance
  const lang = i18n.language;
  return (
    <Box
      sx={{
        direction: lang === "ar" ? "rtl" : "ltr", // Apply RTL direction
        minHeight: "100vh",
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
