import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme

const ProfFullWidthSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          backgroundColor: '#131331',
          color: '#DDEFFF',
          display: 'flex', // Enable flexbox on the container
          justifyContent: 'center', // Center the container horizontally
          alignItems: 'center', // Optional: Center the container vertically
          py: { 
            xxs: '24px', 
            xs: '48px', 
            sm: '60px', 
            md: '84px', 
            lg: '84px', 
            xl: '84px', 
            xxl: '97px' 
          },
        }}
      >
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            display: 'flex',
            justifyContent: 'center', // Center content horizontally inside the container
            alignItems: 'center', // Optional: Center content vertically
            textAlign: 'left', // Optional: Center the text inside
          }}
        >
          <Grid container spacing={2} justifyContent="center">
            {/* First Column */}
            <Grid item xxs={12} xs={12} sm={12} md={10} lg={8} xl={6} xxl={6}>
              <Typography variant='h3' sx={{fontSize: {xxs: '30px', sm: '34px', md: '40px'}, fontFamily: 'Playfair Display Bold', pb: '24px' }}>Defining the Problem</Typography>
              <Typography sx={{ mt: 2, fontSize: '18px', fontFamily: 'Calibre Regular' }}>
              It is essential to consider the user’s unique lifestyle and professional needs, facilitate interaction with health professionals, provide comprehensive health analysis, and provide effective tools for meal planning and progress tracking in health monitoring applications. </Typography>
            </Grid>

            {/* Additional Columns */}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default ProfFullWidthSection;
