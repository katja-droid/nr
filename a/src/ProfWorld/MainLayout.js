import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; // Import your custom theme
import mainImage from '../assets/forum-cover.png'; // Replace with your main image
import block1Image from '../assets/main1.png'; // Replace with your block 1 image
import block2Image from '../assets/main2.png'; // Replace with your block 2 image
import gif from '../assets/pw-main.gif'
import bg from '../assets/begin-background.png'
import RatioGif from './RatioGif';

const MainLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          color: '#0A0A14',
          py: {
            xxs: '24px',
            xs: '48px',
            sm: '60px',
            md: '84px',
            lg: '84px',
            xl: '84px',
            xxxl: '97px',
          },
        }}
      >
        <Container disableGutters maxWidth={false} sx={{ width: '100%', py: 0 }}>
          {/* Main Section */}
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sx={{ textAlign: 'center', pb: '24px' }}>
              <Typography
                sx={{
                  fontSize: { md: '40px', sm: '34px', xxs: '25px' },
                  fontFamily: 'Playfair Display Bold',
                  pb: '24px',
                }}
                variant="h3"
              >
                Main
              </Typography>
            </Grid>

            {/* Paragraph Section */}
            <Grid item xs={12} lg={10} xl={10} xxxl={10} sx={{ textAlign: { xxs: 'left', sm: 'left', md: 'center', lg: 'center' }, mb: '24px' }}>
              <Typography
                sx={{
                  pb: { md: '24px', xxs: '16px' },
                  fontSize: '18px',
                  lineHeight: '26px',
                  fontFamily: 'Calibre Regular',
                }}
              >
                Essential information is provided to keep track of current data such as job postings, new job seekers added, job postings, tasks, and meetings. The calendar displays scheduled events, and notifications highlight important dates such as birthdays, tasks in progress, and other relevant reminders. The system is intended to streamline the recruitment process and strengthen the organization by providing easy access to and management of all critical information.
              </Typography>
            </Grid>

            {/* Main Image Section */}
            <Grid item xs={12} sx={{ pb: '24px' }}>
              <RatioGif image={gif} backgroundImage={bg} />
            </Grid>

            {/* Title Image Blocks */}
            <Grid
              container
              spacing={2}
              justifyContent="center"
              direction="row" // Always keep row layout
              sx={{ width: '100%' }}
            >
              {/* Block 1 */}
              <Grid
                item
                xs={12}
                lg={10} // 10 cols on larger screens
                xl={10}
                xxxl={10}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: { xxs: 'left', sm: 'left', md: 'center', lg: 'center' },
                  py: {
                    xxxl: '64px',
                    xl: '64px',
                    lg: '64px',
                    md: '24px',
                    sm: '0',
                    xs: '0',
                    xxs: '0',
                  },
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: '18px',
                      fontFamily: 'Calibre Regular',
                      pb: '12px',
                    }}
                    variant="h4"
                  >
                    Before verification
                  </Typography>
                  <Box
                    component="img"
                    src={block1Image}
                    alt="Block 1 Image"
                    sx={{
                      width: '100%',
                      borderRadius: '8px',
                    }}
                  />
                </Box>
              </Grid>

              {/* Block 2 */}
              <Grid
                item
                xs={12}
                lg={10} // 10 cols on larger screens
                xl={10}
                xxxl={10}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: { xxs: 'left', sm: 'left', md: 'center', lg: 'center' },
                  py: {
                    xxxl: '64px',
                    xl: '64px',
                    lg: '64px',
                    md: '24px',
                    sm: '0',
                    xs: '0',
                    xxs: '0',
                  },
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: '18px',
                      fontFamily: 'Calibre Regular',
                      pb: '12px',
                    }}
                    variant="h4"
                  >
                    After verification
                  </Typography>
                  <Box
                    component="img"
                    src={block2Image}
                    alt="Block 2 Image"
                    sx={{
                      width: '100%',
                      borderRadius: '8px',
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout;
