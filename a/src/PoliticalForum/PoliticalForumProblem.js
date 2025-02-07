import { Box, Typography } from '@mui/material';
import React from 'react';

const PoliticalForumProblem = () => {
  return (
    <div id="nutritionistProblem" style={{ width: '100%' }}>
      <Typography
        variant="h3"
        sx={{
          fontSize: { xxs: '30px', sm: '34px', md: '40px' },
          fontFamily: 'Playfair Display Bold',
          pb: { xxs: '16px', sm: '24px', lg: '32px' }, // Responsive padding after heading
        }}
      >
        The Problem
      </Typography>

      <Box
        component="ul"
        sx={{
          fontSize: '18px',
          color: '#0A0A14',
          lineHeight: '26px',
          listStyle: 'none', // Remove default list markers
          paddingLeft: 0,
          '& li': {
            mb: '25px', // Adds 25px gap between main list items
          },
          fontFamily: 'Calibre Regular',
        }}
      >
        <li>
          <Typography sx={{ fontWeight: 'bold' }}>
            1. Intricate Navigation:
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0, marginTop: 0 }}>
            <li style={{ marginBottom: '0' }}>
              - The navigation is intricate and the search feature is not optimal.
            </li>
          </Box>
        </li>
        <li>
          <Typography sx={{ fontWeight: 'bold' }}>
            2. Inaccurate Search Results:
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0, marginTop: 0 }}>
            <li style={{ marginBottom: '0' }}>
              - Search results are either overly broad, leading to many similar pages/sites, or overly narrow, displaying irrelevant information for a specific website.
            </li>
          </Box>
        </li>
        <li>
          <Typography sx={{ fontWeight: 'bold' }}>
            3. Disconnect in Priorities:
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0, marginTop: 0 }}>
            <li style={{ marginBottom: '0' }}>
              - A disconnect exists between the priorities showcased on the site and the priorities held by both citizens and staff.
            </li>
          </Box>
        </li>
        <li>
          <Typography sx={{ fontWeight: 'bold' }}>
            4. Lack of User Awareness:
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0, marginTop: 0 }}>
            <li style={{ marginBottom: '0' }}>
              - Users arriving from search engines often lack awareness of their location and possible next steps.
            </li>
          </Box>
        </li>
        <li>
          <Typography sx={{ fontWeight: 'bold' }}>
            5. Dispersed Information:
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0, marginTop: 0 }}>
            <li style={{ marginBottom: '0' }}>
              - Information is dispersed across departments, often duplicated and conflicting, and is presented in a manner that hinders quick understanding and access to answers.
            </li>
          </Box>
        </li>
        <li>
          <Typography sx={{ fontWeight: 'bold' }}>
            6. Lack of Digital Experience Assessment:
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0, marginTop: 0 }}>
            <li style={{ marginBottom: '0' }}>
              - There is no mutual agreement on whether the digital experience is progressing over time due to the absence of continuous user research and testing with actual website visitors.
            </li>
          </Box>
        </li>
      </Box>
    </div>
  );
};

export default PoliticalForumProblem;
