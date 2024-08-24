import React from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import { useTheme } from "styled-components";
import { useTranslation } from "react-i18next";
import Blob1 from "../assets/blob/blob.svg";
import Blob2 from "../assets/blob/blob1.svg";
import Line from "../assets/blob/line.svg";
const Hero = () => {
  const theme = useTheme();
  const { i18n } = useTranslation();
  const imageSrc = theme.primary === "#003285" ? "/1.png" : "/1.png";

  const isBlueTheme = theme.primary === "#003285";
  const welcomeText = isBlueTheme
    ? `${i18n.t("welcomeText")}`
    : `${i18n.t("joinText")}`;
  const subHeadingText = isBlueTheme
    ? `${i18n.t("subHeadingText")}`
    : `${i18n.t("downloadText")}`;
  const paragraphText = isBlueTheme
    ? `${i18n.t("paragraphText")}`
    : `${i18n.t("opportunityText")}`;

  const direction = i18n.dir();

  return (
    <Box
      name="home"
      sx={{
        position: "relative",
        padding: "30px 20px",
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        overflow: "hidden",
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: theme.primary,
      }}
    >
      {/* Blob 1 */}
      <Box
        component="img"
        src={Blob1}
        alt="Blob 1"
        sx={{
          position: "absolute",
          bottom: "10%",
          [direction === "rtl" ? "right" : "left"]: "5%",
          width: "100px",
          height: "auto",
          zIndex: 0,
          animation: "blobSlideIn 1s ease-out forwards",
          "@keyframes blobSlideIn": {
            from: {
              transform:
                direction === "rtl" ? "translateX(100%)" : "translateX(-100%)",
            },
            to: { transform: "translateX(0)" },
          },
          display: { xs: "none", md: "block" }, // Hide on mobile
        }}
      />

      {/* Blob 2 */}
      <Box
        component="img"
        src={Blob2}
        alt="Blob 2"
        sx={{
          position: "absolute",
          bottom: "0%",
          [direction === "rtl" ? "left" : "right"]: "-30%",
          width: "100%",
          height: "100%",
          zIndex: 0,
          animation: "blobSlideIn 1s ease-out forwards",
          animationDelay: "0.5s",
          "@keyframes blobSlideIn": {
            from: {
              transform:
                direction === "rtl" ? "translateX(-100%)" : "translateX(100%)",
            },
            to: { transform: "translateX(0)" },
          },
          display: { xs: "none", md: "block" }, // Hide on mobile
        }}
      />
      <Box
        component="img"
        src={Line}
        alt="Line"
        sx={{
          position: "absolute",
          bottom: "20%",
          left: "10%",
          opacity: 0.5,
          [direction === "rtl" ? "left" : "right"]: "-30%",
          width: "100%",
          height: "100%",
          zIndex: 0,
          animation: "blobSlideIn 1s ease-out forwards",
          animationDelay: "0.5s",
          "@keyframes blobSlideIn": {
            from: {
              transform:
                direction === "rtl" ? "translateX(-100%)" : "translateX(100%)",
            },
            to: { transform: "translateX(0)" },
          },
          display: { xs: "none", md: "block" }, // Hide on mobile
        }}
      />
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="flex-start"
          sx={{ position: "relative", zIndex: 1, paddingTop: "100px" }}
        >
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                position: "relative",
                zIndex: 1,
                "& .fadeIn": {
                  transform:
                    direction === "rtl"
                      ? "translateX(100%)"
                      : "translateX(-100%)",
                  animation:
                    direction === "rtl"
                      ? "slideInRight 1s ease-out forwards"
                      : "slideInLeft 1s ease-out forwards",
                },
                "& .fadeIn:nth-of-type(2)": {
                  animationDelay: "0.2s",
                },
                "& .fadeIn:nth-of-type(3)": {
                  animationDelay: "0.4s",
                },
                "@keyframes slideInLeft": {
                  from: { transform: "translateX(-100%)" },
                  to: { transform: "translateX(0)" },
                },
                "@keyframes slideInRight": {
                  from: { transform: "translateX(100%)" },
                  to: { transform: "translateX(0)" },
                },
              }}
            >
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                color={theme.text}
                sx={{
                  fontSize: { xs: "1.5rem", sm: "2rem" },
                  textAlign: { xs: "center", md: "left" },
                }}
                className="fadeIn"
              >
                {welcomeText}
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                color={theme.text}
                sx={{
                  fontSize: { xs: "1.25rem", sm: "1.5rem" },
                  textAlign: { xs: "center", md: "left" },
                }}
                className="fadeIn"
              >
                {subHeadingText}
              </Typography>
              <Typography
                variant="body1"
                color={theme.text}
                paragraph
                sx={{
                  textAlign: { xs: "center", md: "left" },
                }}
                className="fadeIn"
              >
                {paragraphText}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                  "& button": {
                    flex: 1,
                    whiteSpace: "nowrap",
                    zIndex: 2,
                  },
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => console.log("first")}
                  startIcon={<AndroidIcon sx={{ color: theme.primary }} />}
                  sx={{
                    backgroundColor: theme.text,
                    color: theme.primary,
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                    "&:hover": {
                      backgroundColor: theme.text,
                      opacity: 1,
                    },
                    width: { xs: "100%", sm: "auto" },
                  }}
                >
                  {i18n.t("androidButton")}
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<AppleIcon />}
                  sx={{
                    borderColor: theme.text,
                    color: theme.text,
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                    "&:hover": {
                      borderColor: theme.text,
                      opacity: 1,
                    },
                    width: { xs: "100%", sm: "auto" },
                  }}
                >
                  {i18n.t("iosButton")}
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={imageSrc}
              alt="Hero"
              sx={{
                width: { xs: "100%", sm: "60%" },
                height: "auto",
                maxWidth: "200px",
                display: "block",
                borderRadius: "8px",
                transform:
                  direction === "rtl"
                    ? "translateX(-100%)"
                    : "translateX(100%)",
                animation:
                  direction === "rtl"
                    ? "slideInLeft 1s ease-out forwards"
                    : "slideInRight 1s ease-out forwards",
                animationDelay: "1s",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
