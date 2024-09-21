import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
} from '@mui/material';
import { useTheme } from '../ThemeContext';
import { useTranslation } from 'react-i18next'; // Import for translations

const ApplySection = () => {
  const { theme } = useTheme();
  const { t } = useTranslation(); // Hook for translations

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    city: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = t('firstNameError');
    if (!formData.lastName) newErrors.lastName = t('lastNameError');
    if (!formData.phoneNumber) newErrors.phoneNumber = t('phoneError');
    if (!formData.city) newErrors.city = t('cityError');
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = t('emailError');

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted', formData);
    }
  };

  const cities = [
    'Tunis',
    'Sfax',
    'Sousse',
    'Ettadhamen',
    'Kairouan',
    'Gabès',
    'Bizerte',
    'Ariana',
    'Gafsa',
    'La Marsa',
    'Monastir',
    'Ben Arous',
    'Kasserine',
    'Médenine',
    'Tataouine',
    'Douz',
    'Tozeur',
    'Zarzis',
    'Mahdia',
    'Siliana',
    'Jendouba',
    'Nabeul',
    'Zaghouan',
  ];

  return (
    <Box
      sx={{
        padding: { xs: '60px 20px', sm: '80px 40px' },
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        color: '#fff',
      }}
      id='apply'
    >
      <Container maxWidth='md' sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant='h4'
          component='h2'
          gutterBottom
          sx={{
            mb: 4,
            fontWeight: 'bold',
            fontFamily: "'Poppins', sans-serif",
            color: '#fff',
          }}
        >
          {t('applyTitle')} {/* Translated title */}
        </Typography>
        <Typography
          variant='body1'
          gutterBottom
          sx={{
            mb: 4,
            fontSize: '1.1rem',
            lineHeight: 1.8,
            color: '#f1f1f1',
          }}
        >
          {t('applyDescription')} {/* Translated description */}
        </Typography>

        <Box
          component='form'
          noValidate
          autoComplete='off'
          onSubmit={handleSubmit}
          sx={{ maxWidth: 600, margin: '0 auto' }}
        >
          <Grid container spacing={3}>
            {/* First Name */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label={t('firstName')} // Translated field label
                variant='outlined'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                  },
                  '& .MuiInputLabel-root': {
                    color: theme.primary,
                  },
                  '& .Mui-focused .MuiInputLabel-root': {
                    color: '#fff',
                  },
                  '& .MuiInputLabel-root.Mui-error': {
                    color: 'red', // Error label color
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.primary,
                  },
                }}
              />
            </Grid>

            {/* Last Name */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label={t('lastName')} // Translated field label
                variant='outlined'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                error={!!errors.lastName}
                helperText={errors.lastName}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                  },
                  '& .MuiInputLabel-root': {
                    color: theme.primary,
                  },
                  '& .Mui-focused .MuiInputLabel-root': {
                    color: '#fff',
                  },
                  '& .MuiInputLabel-root.Mui-error': {
                    color: 'red', // Error label color
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.primary,
                  },
                }}
              />
            </Grid>

            {/* Phone Number */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label={t('phoneNumber')} // Translated field label
                variant='outlined'
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={handleChange}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                  },
                  '& .MuiInputLabel-root': {
                    color: theme.primary,
                  },
                  '& .Mui-focused .MuiInputLabel-root': {
                    color: '#fff',
                  },
                  '& .MuiInputLabel-root.Mui-error': {
                    color: 'red', // Error label color
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.primary,
                  },
                }}
              />
            </Grid>

            {/* City */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth error={!!errors.city}>
                <InputLabel
                  sx={{
                    color: theme.primary,
                    '&.Mui-focused': {
                      color: '#fff', // White label when focused
                    },
                  }}
                >
                  {t('city')} {/* Translated field label */}
                </InputLabel>
                <Select
                  name='city'
                  value={formData.city}
                  onChange={handleChange}
                  MenuProps={{
                    PaperProps: {
                      style: {
                        maxHeight: 200, // Limit the dropdown list height
                      },
                    },
                  }}
                  sx={{
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: theme.primary,
                    },
                  }}
                >
                  {cities.map((city, index) => (
                    <MenuItem key={index} value={city}>
                      {city}
                    </MenuItem>
                  ))}
                </Select>
                {!!errors.city && (
                  <FormHelperText>{errors.city}</FormHelperText>
                )}
              </FormControl>
            </Grid>

            {/* Email */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t('email')} // Translated field label
                type='email'
                variant='outlined'
                name='email'
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                  },
                  '& .MuiInputLabel-root': {
                    color: theme.primary,
                  },
                  '& .Mui-focused .MuiInputLabel-root': {
                    color: '#fff',
                  },
                  '& .MuiInputLabel-root.Mui-error': {
                    color: 'red', // Error label color
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.primary,
                  },
                }}
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                variant='contained'
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
                {t('applyNow')} {/* Translated submit button */}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ApplySection;
