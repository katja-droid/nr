import React, { useState } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from '../Navbar';
import Footer from '../Footer';
import theme from '../theme';  // Your custom theme
import ReadingProgressBar from '../ReadingProgressBar';  // Progress bar component
import cover from '../assets/nutritionist-cover.png';  // Your cover image
import FullWidthSection from '../VirtualNutritionist/FullWidthSection';
import TimelineAndContribution from '../VirtualNutritionist/TimelineAndContribution';
import ClientOverview from '../VirtualNutritionist/ClientOverview';
import CoverSection from './CoverSection';
import ProfClientOverview from './ProfClientOverview';
import ProfTimelineAndContribution from './ProfTimelineAndContribution';
import Slider from './Slider';
import ProfFullWidthSection from './ProfFullWidthSection';
import FinalDesignSection from './FinalDesignSection';
import NavbarProject from '../NavbarProject';
import ProfWorldProblem from './ProfWorldProblem';
import ProfWorldUsers from './ProfWorldUsers';
import ProfWorldAnalytics from './ProfWorldAnalytics';
import ProfWorldGoal from './ProfWorldGoal';
import ProfWorldConstraints from './ProfWorldConstraints';
import ProfWorldKPIs from './ProfWorldKPIs';
import BeginSection from './BeginSection';
import CompanyRegistrationSection from './CompanyRegistrationSection';
import SecurityServiceSection from './SecurityServiceSection';
import CompanyRegistrationAfterSection from './CompanyRegistrationAfterSection'
import MainLayout from './MainLayout';

const contribution = [
  { id: 1, name: 'User Research', color: '#FFE9E3' },
  { id: 2, name: 'Competitive App Analysis', color: '#E4DBEA' },
  { id: 3, name: 'User Surveys', color: '#E7EDFF' },
  { id: 4, name: 'Prototype Testing', color: '#FAF6C8' },
  { id: 5, name: 'User Experience Analysis', color: '#E7EDFF' },
  { id: 6, name: 'Research on User Needs and Preferences', color: '#E4DBEA' },
  { id: 7, name: 'Evaluation of Interface Accessibility and Usability', color: '#FFE9E3' },
  { id: 8, name: 'Studying Modern Trends in Health and Fitness', color: '#FAF6C8' },
];

const tools = [
  { id: 1, name: 'Figma', href: '#', color: '#FFE9E3' },
  { id: 2, name: 'OptimalSort', href: '#', color: '#E4DBEA' },
  { id: 3, name: 'System Usability Score', href: '#', color: '#E7EDFF' },
  { id: 4, name: 'Human Interface Guidelines', href: '#', color: '#FAF6C8' },
  { id: 5, name: 'Material Design', href: '#', color: '#E7EDFF' },
];

const sections = [
  { id: 'problem', label: 'Problem' },
  { id: 'users', label: 'Users' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'goal', label: 'Goal' },
  { id: 'constraints', label: "Project's Constraints" },
  { id: 'designKPIs', label: 'Design KPIs' },
];

const ProfWorld = () => {
  const [activeSection, setActiveSection] = useState('problem'); // Default section

// Function to handle section selection
const handleSelectSection = (section) => {
  setActiveSection(section);
};

// Dynamic rendering of sections based on selected section
const renderSection = () => {
  switch (activeSection) {
    case 'problem':
      return < ProfWorldProblem/>;
    case 'users':
      return < ProfWorldUsers/>;
    case 'analytics':
      return < ProfWorldAnalytics/>;
    case 'goal':
      return < ProfWorldGoal/>;
    case 'constraints':
      return < ProfWorldConstraints/>;
    case 'designKPIs':
      return < ProfWorldKPIs/>;
    default:
      return < ProfWorldProblem/>;
      
  }
};

  return (
    <ThemeProvider theme={theme}>
      <ReadingProgressBar />  {/* Reading Progress Bar */}
      <Container disableGutters maxWidth={false} sx={{  color: '#0A0A14', // Ensure image doesn't overflow
          backgroundColor: '#FAF6C8' }}>
        {/* Navbar */}
        <Grid container>
          <Grid item xxs={12}>
            <Navbar />
          </Grid>
        </Grid>
        
       
        {/* Main content */}
        <Grid container direction="column" sx={{ py: 0 }}>
          <Grid item xs={12} sx={{padding: 0}}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0}}>
              <Typography variant='h1' sx={{ textAlign: 'center', fontSize: {lg: '64px', md: '54px', xxs: '44px'}, fontFamily: '"DM Serif Text", serif', fontWeight: 'normal', pb: '30px', pt: {lg: '66px', md: '64px', xxs: '24px' } }}>Prof.world </Typography>
              <Typography
  sx={{
    textAlign: 'center',
    fontSize: '20px',
    lineHeight: '28px',
    fontFamily: 'Calibre Medium',
    width: {
      xl: '574px',
      lg: '563px',
      md: '100%',
      sm: '336px',
      xs: '328px',
    },
    pb: '28px', // Ensure paddingBottom matches the lineHeight value
  }}
>
  SaaS: automated professional recruiting, training and payroll system
  for B2B segment
</Typography>

              
            </Box>
          </Grid>
         
         
</Grid>
</Container>

  <CoverSection/>

  <Container disableGutters maxWidth={false} sx={{  color: '#0A0A14' }}>

<Grid container spacing={2} justifyContent="space-between">
  {/* First Column - Takes full width on small screens, and 5 out of 12 columns on medium screens and up */}
  <Grid item xs={12} lg={5}>
  <ProfClientOverview/>
  </Grid>

  {/* Spacer Column - Empty column that only appears after the md breakpoint */}
  <Grid item xs={0} lg={1} />

  {/* Second Column - Takes full width on small screens, and 5 out of 12 columns on medium screens and up */}
  <Grid item xs={12} lg={5}>
  <ProfTimelineAndContribution contribution={contribution} tools={tools} />
  </Grid>
</Grid>
      
        </Container>

      <Container disableGutters maxWidth={false} sx={{ minHeight: '100vh', color: '#0A0A14' }}>
         <FinalDesignSection/>
        </Container>
              {/* Full-width section */}
     <ProfFullWidthSection/>
     <Grid container justifyContent="center" spacing={0} sx={{ py: 2 }}>
<Grid item xxs={12} lg={10} >
     <NavbarProject sections={sections} onSelectSection={handleSelectSection} activeLink={activeSection} // Pass active section as prop
     ></NavbarProject>
     {renderSection()}
     <Container disableGutters maxWidth={false} sx={{  color: '#0A0A14', // Ensure image doesn't overflow
           }}>
     <Grid container justifyContent="center" spacing={0} >
<Grid item xl={'935px'} lg={10} xxs={12}>
     <BeginSection/>
     </Grid>
     </Grid>
    
     </Container>
     <Container disableGutters maxWidth={false} sx={{  color: '#0A0A14', // Ensure image doesn't overflow
           }}>
     <Grid container justifyContent="center" spacing={0}>
<Grid item  xxs={12}>
    
     </Grid>
     </Grid>
     </Container>
     </Grid>
     </Grid>
     <CompanyRegistrationSection/>
     <SecurityServiceSection/>
     <CompanyRegistrationAfterSection/>
     <MainLayout/>
      {/* Footer */}
      <Footer />
    </ThemeProvider>
  );
};

export default ProfWorld;
