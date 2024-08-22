import React, { createContext, useContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const colors = {
  client: {
    primary: "#003285", // Blue
    text: "#fff", // White text on blue
    background: "#003285", // Blue background
    button: "#fff", // Black button color
    icons: "#000",
  },
  driver: {
    primary: "#FFA500", // Orange
    text: "#000", // Black text on orange
    background: "#FFA500", // Orange background
    icons: "#000",
    button: "#000",
  },
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState("client");
  const [isRtl, setIsRtl] = useState(false); // Add RTL state

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "client" ? "driver" : "client"));
  };

  const toggleDirection = () => {
    setIsRtl((prevRtl) => !prevRtl);
  };

  const theme = colors[themeMode];

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, isRtl, toggleDirection }}
    >
      <StyledThemeProvider theme={{ ...theme, rtl: isRtl }}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
