import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'; // For consistent styling across browsers

const colors = {
  client: {
    primary: '#003285', // Blue
    text: '#fff', // White text on blue
    background: '#003285', // Blue background
    button: '#fff', // White button color
    icons: '#000',
  },
  driver: {
    primary: '#FFA500', // Orange
    text: '#fff', // White text on orange
    background: '#FFA500', // Orange background
    icons: '#000',
    button: '#fff',
  },
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState('client');
  const [isRtl, setIsRtl] = useState(false); // RTL state

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'client' ? 'driver' : 'client'));
  };

  const toggleDirection = () => {
    setIsRtl((prevRtl) => !prevRtl);
  };

  const theme = colors[themeMode];

  // Material UI theme with Lato and RTL support
  const muiTheme = createTheme({
    direction: isRtl ? 'rtl' : 'ltr',
    typography: {
      fontFamily: "'Lato', sans-serif", // Global font set to Lato
    },
    palette: {
      primary: {
        main: theme.primary,
      },
      text: {
        primary: theme.text,
      },
      background: {
        default: theme.background,
      },
    },
  });

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, isRtl, toggleDirection }}
    >
      {/* Wrapping with both styled-components and Material UI Theme Providers */}
      <StyledThemeProvider theme={{ ...theme, rtl: isRtl }}>
        <MuiThemeProvider theme={muiTheme}>
          <CssBaseline /> {/* Ensure global normalization of styles */}
          {children}
        </MuiThemeProvider>
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
