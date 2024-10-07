import { Box, Typography } from '@mui/material';
import React from 'react';

const PoliticalForumKPIs = () => {
  return (
    <div id="nutritionistDesignKPIs" style={{ width: '100%' }}>
      <Typography
        variant="h3"
        sx={{
          fontSize: { xxs: '30px', sm: '34px', md: '40px' },
          fontFamily: 'Playfair Display Bold',
          pb: { xxs: '16px', sm: '24px', lg: '32px' }, // Responsive padding after heading
        }}
      >
        Design KPIs
      </Typography>

      {/* Additional blocks styled like Analytics */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '24px', pb: '32px' }}>
        <Box sx={{ border: '1px solid #EFEFF8', padding: '32px', flex: 1 }}>
          <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '20px', // Headings 20px
              fontWeight: 'bold',
              pb: '8px',
            }}
          >
            1. How many people find what they are looking for
          </Typography>
          
        </Box>

        <Box sx={{ border: '1px solid #EFEFF8', padding: '32px', flex: 1 }}>
          <Typography
            sx={{
              fontFamily: 'Calibre Regular',
              fontSize: '20px', // Headings 20px
              fontWeight: 'bold',
              pb: '8px',
            }}
          >
            2. How much time people need to find what they are looking for
          </Typography>
          
        </Box>
      </Box>

      <Typography sx={{ fontSize: '18px', fontFamily: 'Calibre Regular', pb: '16px' }}>
        To assess the success of the application design, the following KPIs will be used:
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
          <Typography sx={{ fontWeight: 'bold' }}>1. User Satisfaction Level:</Typography>
          <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0, marginTop: 0 }}>
            <li style={{ marginBottom: '0' }}>
              - Should be no less than <b>85%</b> according to surveys after using the application.
            </li>
          </Box>
        </li>

        <li>
          <Typography sx={{ fontWeight: 'bold' }}>2. Engagement Level:</Typography>
          <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0, marginTop: 0 }}>
            <li style={{ marginBottom: '0' }}>
              - Users should spend an average of at least <b>30 minutes</b> per week interacting with the application.
            </li>
          </Box>
        </li>

        <li>
          <Typography sx={{ fontWeight: 'bold' }}>3. User Conversion Rate:</Typography>
          <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0, marginTop: 0 }}>
            <li style={{ marginBottom: '0' }}>
              - We aim for <b>60%</b> of new users to actively use the application after initial registration.
            </li>
          </Box>
        </li>

        <li>
          <Typography sx={{ fontWeight: 'bold' }}>4. Daily Active Users (DAU):</Typography>
          <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0, marginTop: 0 }}>
            <li style={{ marginBottom: '0' }}>
              - The goal is to reach <b>10,000 DAU</b> within the first 6 months after launch.
            </li>
          </Box>
        </li>

        <li>
          <Typography sx={{ fontWeight: 'bold' }}>5. Loading Speed:</Typography>
          <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0, marginTop: 0 }}>
            <li style={{ marginBottom: '0' }}>
              - The application should load in less than <b>3 seconds</b> to ensure a comfortable user experience.
            </li>
          </Box>
        </li>
      </Box>

      <Typography sx={{ fontSize: '18px', fontFamily: 'Calibre Regular', pt: '16px' }}>
        In detail, these attributes could be measured and tracked across a variety of user’s touch points:
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
        <li>Top tasks completion rates for internal and external users</li>
        <li>Top tasks completion times on or off the website</li>
        <li>% of screen dedicated for content (mobile/desktop)</li>
        <li>Overall satisfaction with the content and experience on the site (clarity and speed of navigation)</li>
        <li>System Usability Scale Score &gt; 70</li>
        <li>Rate of errors and mistakes in navigation, search, and data input (e.g., filters, forms, search queries)</li>
        <li>Accuracy of data successfully submitted by users (how difficult it is to make mistakes)</li>
        <li>Frequency of dead ends (404s, empty search/filtering results, lock-out rates due to poor validation)</li>
        <li>
          Time to production, or how quickly users can publish quality content that matches content and design
          requirements
        </li>
        <li>Search query iterations, or how much time people spend refining keywords to find relevant results</li>
        <li>Carbon footprint impact, or how sustainable the website is in light of climate challenges</li>
      </Box>
    </div>
  );
};

export default PoliticalForumKPIs;
