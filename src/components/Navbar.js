import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
  Container,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Flag from 'react-flagkit';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const { i18n } = useTranslation();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleLanguageMenuOpen = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    handleLanguageMenuClose();
  };

  // Handle scroll event to change the navbar style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Adjust the scroll position as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const drawerContent = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100%',
        width: 250,
        padding: 2,
        boxSizing: 'border-box',
        backgroundColor: '#fff',
      }}
    >
      <IconButton
        onClick={toggleDrawer(false)}
        sx={{
          alignSelf: 'flex-end',
          color: '#003285',
          fontSize: 28,
        }}
      >
        <CloseIcon />
      </IconButton>
      <List
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 0,
          margin: 0,
        }}
      >
        {['home', 'services', 'contact'].map((text) => (
          <ListItem
            button
            key={text}
            onClick={toggleDrawer(false)}
            sx={{
              width: '100%',
              justifyContent: 'center',
              padding: '8px 0',
            }}
          >
            <ScrollLink
              to={text}
              smooth={true}
              duration={500}
              style={{
                width: '100%',
                textAlign: 'center',
                color: '#003285',
                cursor: 'pointer',
                fontFamily: "'Lato', sans-serif",
              }}
            >
              {i18n.t(text)} {/* Translate Home, Services, Contact */}
            </ScrollLink>
          </ListItem>
        ))}

        <ListItem
          sx={{
            width: '100%',
            justifyContent: 'center',
            padding: '8px 0',
          }}
        >
          <Button
            variant='outlined'
            fullWidth
            onClick={handleLanguageMenuOpen}
            sx={{
              color: '#003285',
              borderColor: '#003285',
              justifyContent: 'center',
              marginTop: 2,
              '&:hover': {
                color: '#003285',
                borderColor: '#003285',
                filter: 'brightness(0.9)',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '4px 8px',
              }}
            >
              <Flag
                country={
                  i18n.language === 'fr'
                    ? 'FR'
                    : i18n.language === 'ar'
                    ? 'TN'
                    : 'GB'
                }
                style={{ marginRight: 8 }}
              />
              <Typography variant='body1' color='inherit'>
                {i18n.language === 'fr'
                  ? 'French'
                  : i18n.language === 'ar'
                  ? 'Arabic'
                  : 'English'}
              </Typography>
            </Box>
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position='fixed'
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: scrolled ? '#fff' : 'transparent',
          color: scrolled ? '#003285' : '#fff',
          transition: 'background-color 0.3s, color 0.3s',
          width: '100%',
          paddingX: { xs: 2, md: 4 },
          boxSizing: 'border-box',
        }}
      >
        <Container maxWidth='lg'>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              variant='h6'
              sx={{
                fontFamily: "'Lato', sans-serif",
                color: scrolled ? '#003285' : '#fff',
              }}
            >
              Linxexpress
            </Typography>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'flex-end',
                alignItems: 'center',
                flexGrow: 1,
              }}
            >
              <ScrollLink
                to='home'
                smooth={true}
                duration={500}
                style={{
                  margin: '0 16px',
                  color: scrolled ? '#003285' : '#fff',
                  cursor: 'pointer',
                  transition: 'color 0.3s',
                }}
                className='navbar-link'
              >
                <Typography>{i18n.t('home')}</Typography>
              </ScrollLink>
              <ScrollLink
                to='services'
                smooth={true}
                duration={500}
                style={{
                  margin: '0 16px',
                  color: scrolled ? '#003285' : '#fff',
                  cursor: 'pointer',
                  transition: 'color 0.3s',
                }}
                className='navbar-link'
              >
                <Typography>{i18n.t('services')}</Typography>
              </ScrollLink>
              <ScrollLink
                to='contact'
                smooth={true}
                duration={500}
                style={{
                  margin: '0 16px',
                  color: scrolled ? '#003285' : '#fff',
                  cursor: 'pointer',
                  transition: 'color 0.3s',
                }}
                className='navbar-link'
              >
                <Typography>{i18n.t('contact')}</Typography>
              </ScrollLink>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <Button
                variant='outlined'
                onClick={handleLanguageMenuOpen}
                sx={{
                  gap: '1rem',
                  color: scrolled ? '#003285' : '#fff',
                  borderColor: scrolled ? '#003285' : '#fff',

                  '&:hover': {
                    color: '#003285',
                    borderColor: '#003285',
                    filter: 'brightness(0.9)',
                  },
                }}
              >
                <Box
                  sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                >
                  <Flag
                    country={
                      i18n.language === 'fr'
                        ? 'FR'
                        : i18n.language === 'ar'
                        ? 'TN'
                        : 'GB'
                    }
                    style={{ marginRight: 8 }}
                  />
                  <Typography variant='body1'>
                    {i18n.language === 'fr'
                      ? 'French'
                      : i18n.language === 'ar'
                      ? 'Arabic'
                      : 'English'}
                  </Typography>
                </Box>
              </Button>
            </Box>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{
                display: { md: 'none' },
                color: scrolled ? '#003285' : '#fff',
              }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor={i18n.language === 'ar' ? 'left' : 'right'} // Open from left for Arabic
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            backgroundColor: '#fff',
          },
        }}
      >
        {drawerContent}
      </Drawer>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleLanguageMenuClose}
        sx={{
          '& .MuiMenu-paper': {
            backgroundColor: '#fff',
            color: '#003285',
            borderColor: '#003285',
          },
        }}
      >
        {['en', 'fr', 'ar'].map((lang) => (
          <MenuItem
            key={lang}
            onClick={() => handleLanguageChange(lang)}
            sx={{
              '&:hover': {
                backgroundColor: '#f5f5f5',
                filter: 'brightness(0.9)',
              },
            }}
          >
            <Flag
              country={lang === 'fr' ? 'FR' : lang === 'ar' ? 'TN' : 'GB'}
              style={{ marginRight: 8 }}
            />
            <Typography variant='body1'>
              {lang === 'fr' ? 'French' : lang === 'ar' ? 'Arabic' : 'English'}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Navbar;
