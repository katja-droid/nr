import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const PoliticalForumGoal = () => {
  return (
    <Container id="politicalForumGoal" disableGutters maxWidth={false}>
      {/* Container for the title */}
      <Grid container justifyContent="center" spacing={0} sx={{ py: 2 }}>
        <Grid item sm={8} xs={12}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xxs: '30px', sm: '34px', md: '40px' },
              fontFamily: 'Playfair Display Bold',
              pb: '32px',
            }}
          >
            Goals of the Project
          </Typography>
        </Grid>
      </Grid>

      {/* Container for goal cards that is 8 columns wide */}
      <Grid container justifyContent="center" sx={{ py: 2 }}>
        <Grid item sm={8} xs={12}>
          <Grid container spacing={4}>
            {/* Each goal card will be 6 columns wide */}
            <Grid item sm={6} xs={12}>
              <Box sx={{ border: '1px solid #EFEFF8', padding: '32px' }}>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '20px', // Headings 20px
                    fontWeight: 'bold',
                    pb: '8px',
                  }}
                >
                  1. Long-term goal of the project
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '18px', // Text 18px
                    pb: '8px',
                  }}
                >
                  Improve access to information and increase public awareness of ongoing campaigns (engagement) through the website group.
                </Typography>
              </Box>
            </Grid>

            <Grid item sm={6} xs={12}>
              <Box sx={{ border: '1px solid #EFEFF8', padding: '32px' }}>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '20px', // Headings 20px
                    fontWeight: 'bold',
                    pb: '8px',
                  }}
                >
                  2. My goal in the project
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '18px', // Text 18px
                    pb: '8px',
                  }}
                >
                  Improve navigation and search to help both internal and external stakeholders find what they are looking for faster.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </Container>
  );
};

export default PoliticalForumGoal;
