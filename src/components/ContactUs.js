import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Container,
} from '@mui/material';
import { useTheme } from '../ThemeContext';
import { useTranslation } from 'react-i18next'; // Import for translations

const ContactUs = () => {
  const { theme } = useTheme();
  const { t } = useTranslation(); // Hook for translations

  // State for form inputs and validation errors
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = t('nameError'); // Translated error
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = t('emailError'); // Translated error
    if (!formData.message) newErrors.message = t('messageError'); // Translated error

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted', formData);
      // Handle form submission (e.g., API call)
    }
  };

  return (
    <Box
      name='contact'
      sx={{
        padding: '80px 20px',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <Container maxWidth='md'>
        <Typography
          color='#fff'
          variant='h4'
          component='h2'
          gutterBottom
          sx={{
            fontWeight: 'bold',
            mb: 4,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          {t('contactUsTitle')} {/* Translated title */}
        </Typography>
        <Typography
          variant='body1'
          sx={{ marginBottom: '2rem', color: '#f1f1f1', fontSize: '1.1rem' }}
        >
          {t('contactUsSubtitle')} {/* Translated subtitle */}
        </Typography>
        <Box
          component='form'
          onSubmit={handleSubmit}
          sx={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}
        >
          <Grid container spacing={2}>
            {/* Your Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={t('yourName')} // Translated field label
                variant='outlined'
                name='name'
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  },
                  '& .MuiInputLabel-root': {
                    color: theme.primary,
                  },
                  '& .Mui-focused .MuiInputLabel-root': {
                    color: '#fff', // White label when focused
                  },
                  '& .MuiInputLabel-root.Mui-error': {
                    color: 'red', // Error label color
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.primary,
                  },
                  '& .MuiFormHelperText-root': {
                    color: 'red', // Error message color
                    marginTop: '4px',
                    fontSize: '0.875rem', // Ensure smaller font size
                  },
                }}
              />
            </Grid>

            {/* Your Email */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={t('yourEmail')} // Translated field label
                variant='outlined'
                name='email'
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  },
                  '& .MuiInputLabel-root': {
                    color: theme.primary,
                  },
                  '& .Mui-focused .MuiInputLabel-root': {
                    color: '#fff', // White label when focused
                  },
                  '& .MuiInputLabel-root.Mui-error': {
                    color: 'red', // Error label color
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.primary,
                  },
                  '& .MuiFormHelperText-root': {
                    color: 'red', // Error message color
                    marginTop: '4px',
                    fontSize: '0.875rem', // Ensure smaller font size
                  },
                }}
              />
            </Grid>

            {/* Your Message */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t('yourMessage')} // Translated field label
                variant='outlined'
                multiline
                rows={4}
                name='message'
                value={formData.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  },
                  '& .MuiInputLabel-root': {
                    color: theme.primary,
                  },
                  '& .Mui-focused .MuiInputLabel-root': {
                    color: '#fff', // White label when focused
                  },
                  '& .MuiInputLabel-root.Mui-error': {
                    color: 'red', // Error label color
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.primary,
                  },
                  '& .MuiFormHelperText-root': {
                    color: 'red', // Error message color
                    marginTop: '4px',
                    fontSize: '0.875rem', // Ensure smaller font size
                  },
                }}
              />
            </Grid>
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant='contained'
              size='large'
              type='submit'
              sx={{
                backgroundColor: '#fff', // White button with theme color text
                color: theme.primary,
                padding: '12px 24px',
                fontSize: '1rem',
                textTransform: 'none', // Remove uppercase
                borderRadius: '8px',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#f1f1f1',
                },
              }}
            >
              {t('sendMessage')} {/* Translated button text */}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;
