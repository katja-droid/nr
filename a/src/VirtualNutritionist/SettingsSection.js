import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import image from '../assets/nutritionist-settings.png';

const SettingsSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          backgroundColor: '#fff',
          color: '#0A0A14',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: {
            xxs: '24px',
            xs: '48px',
            sm: '60px',
            md: '84px',
            lg: '84px',
            xl: '84px',
            xxl: '97px',
          },
        }}
      >
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Grid
            container
            sx={{
              justifyContent: {
                xs: 'center',
                sm: 'center',
                md: 'center',
                lg: 'center',
                xl: 'space-between',
                xxl: 'space-between',
              },
            }}
          >
            {/* First Column */}
            <Grid item xxs={12} xs={12} sm={12} md={5} lg={5} xl={5}>
              <Box
                sx={{
                  display: 'flex',
                  width: {
                    xs: '100%',
                    sm: '100%',
                    md: '100%',
                    lg: '100%',
                    xl: '100%',
                    xxl: '275px',
                  },
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  flexDirection: 'column',
                }}
              >
                <Typography
                  sx={{
                    textAlign: 'left',
                    fontSize: { md: '30px', xxs: '25px' },
                    fontFamily: 'Playfair Display Bold',
                    pb: '16px',
                    width: '100%',
                  }}
                  variant='h4'
                >
                  Settings
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'left',
                    fontSize: '18px',
                    fontFamily: 'Calibre Regular',
                    pb: { lg: '24px', xxs: '16px' },
                    lineHeight: '26px',
                  }}
                >
                  In «Settings» you can customize the app to your liking by selecting the interface language and display mode. Manage notifications, change passwords, and review the privacy policy to ensure security and get the most out of all the app’s features.
                </Typography>
              </Box>
            </Grid>

            {/* Second Column - Image */}
            <Grid item xxs={12} xs={12} sm={12} md={7} lg={7} xl={7} xxl={7}>
              <Box
                sx={{
                  width: {
                    xs: '100%',
                    sm: '100%',
                    md: '100%',
                    lg: '100%',
                    xl: '100%',
                    xxl: '100%',
                  },
                  paddingLeft: {
                    xs: `calc(8.33% + ${theme.spacing(1)})`,
                    sm: `calc(8.33% + ${theme.spacing(1)})`,
                    md: `calc(8.33% + ${theme.spacing(1)})`,
                    lg: `calc(8.33% + ${theme.spacing(1)})`,
                    xl: `calc(8.33% + ${theme.spacing(1)})`,
                    xxl: `calc(8.33% + ${theme.spacing(1)})`,
                  },
                  paddingRight: {
                    xs: `calc(8.33% + ${theme.spacing(1)})`,
                    sm: `calc(8.33% + ${theme.spacing(1)})`,
                    md: '0',
                  },
                }}
                justifyContent='center'
              >
                <img width="100%" src={image} alt="Settings" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default SettingsSection;
