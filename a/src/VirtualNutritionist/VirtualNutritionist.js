import React, { useState } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from '../Navbar';
import Footer from '../Footer';
import theme from '../theme';  // Your custom theme
import ReadingProgressBar from '../ReadingProgressBar';  // Progress bar component
import cover from '../assets/nutritionist-cover.png';  // Your cover image

import ClientOverview from './ClientOverview';  // Subcomponent
import TimelineAndContribution from './TimelineAndContribution';  // Subcomponent
import FullWidthSection from './FullWidthSection';  // Subcomponent
import NavbarProject from '../NavbarProject';
import NutritionistProblem from './NutritionistProblem';
import NutritionistUsers from './NutritionistUsers';  // Importing the new component
import NutritionistGoal from './NutritionistGoal';
import NutritionistConstraints from './NutritionistConstraints';
import NutritionistKPIs from './NutritionistKPIs';
import NutritionistAnalytics from './NutritionistAnalytics';
import SolutionSection from './SolutionSection';
import LoginSection from './LoginSection';
import PersonalInformationSection from './PersonalInformationSection';
import QuestionsSection from './QuestionsSection';
import ProfileSection from './ProfileSection';
import AnalysesSection from './AnalysesSection';
import SettingsSection from './SettingsSection';
import GoalSection from './GoalSection';
import ActivitySection from './ActivitySection';
import CalendarSection from './CalendarSection';
import DesignSystemSection from './DesignSystemSection';
import { CacheProvider } from '@emotion/react';
import TestingColorSection from './TestingColorSection';
import AccessibilitySection from './AccessibilitySection';
import MoreSection from './MoreSection';

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

const VirtualNutritionist = () => {
  const [activeSection, setActiveSection] = useState('problem'); // Default section

// Function to handle section selection
const handleSelectSection = (section) => {
  setActiveSection(section);
};

// Dynamic rendering of sections based on selected section
const renderSection = () => {
  switch (activeSection) {
    case 'problem':
      return <NutritionistProblem />;
    case 'users':
      return <NutritionistUsers />;
    case 'analytics':
      return <NutritionistAnalytics />;
    case 'goal':
      return <NutritionistGoal />;
    case 'constraints':
      return <NutritionistConstraints />;
    case 'designKPIs':
      return <NutritionistKPIs />;
    default:
      return <NutritionistProblem />;
  }
};

  return (
    <ThemeProvider theme={theme}>
      <ReadingProgressBar />  {/* Reading Progress Bar */}
      <Container disableGutters maxWidth={false} sx={{  color: '#0A0A14', backgroundColor: '#E5F9EC' }}>
        {/* Navbar */}
        <Grid container>
          <Grid item xxs={12}>
            <Navbar />
          </Grid>
        </Grid>

        {/* Main content */}
        <Grid container direction="column" sx={{ py: 2 }}>
          <Grid item xs={12}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Typography variant='h1' sx={{ textAlign: 'center', fontSize: {lg: '64px', md: '54px', xxs: '44px'}, fontFamily: '"DM Serif Text", serif', fontWeight: 'normal', pb: '30px', pt: {lg: '66px', md: '64px', xxs: '24px' } }}>Virtual Nutritionist</Typography>
              <Typography sx={{ textAlign: 'center', fontSize: {md: '20px', xxs: '18px'}, fontFamily: 'Calibre Medium', pb: {lg: '91px', md: '55px', xxs: '76px' }, width: {md: '100%', sm: '182px', xxs: '184px'} }}>
                Health monitoring apps for iOS platform
              </Typography>
              
            </Box>
          </Grid>
          <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={8}  xxs={12} >
            <Box sx={{
      width: { xs: '100%', lg: '100%', md: '348px' } // For example, take full width on small screens and 80% on large screens
    }}>
  <img
    src={cover}
    alt="Virtual Nutritionist Cover"
    style={{ width: '100%' }} // Ensure image takes 100% width of the grid item
  />
  </Box>
</Grid>
</Grid>
</Grid>
</Container>
<Container disableGutters maxWidth={false} sx={{ minHeight: '100vh', color: '#0A0A14', pb: {md: '80px', xxs: '16px'} }}>
<Grid container spacing={2} justifyContent="space-between">
  {/* First Column - Takes full width on small screens, and 5 out of 12 columns on medium screens and up */}
  <Grid item xs={12} lg={5}>
    <ClientOverview />
  </Grid>

  {/* Spacer Column - Empty column that only appears after the md breakpoint */}
  <Grid item xs={0} lg={1} />

  {/* Second Column - Takes full width on small screens, and 5 out of 12 columns on medium screens and up */}
  <Grid item xs={12} lg={5}>
    <TimelineAndContribution contribution={contribution} tools={tools} />
  </Grid>
</Grid>

    
      </Container>

      {/* Full-width section */}
      <FullWidthSection />

      {/* Centered NavbarProject */}
       {/* Navbar Project */}
     

{/* Render Selected Section */}
<Grid container justifyContent="center" spacing={0} sx={{  py: {md: '80px', xxs: '16px'}  }}>
<Grid item xxs={12} lg={10} >
<NavbarProject activeLink={activeSection} sections={sections} onSelectSection={handleSelectSection} />
      {renderSection()}
      </Grid>
      </Grid>

     
        <SolutionSection/>
        <LoginSection/>
        <PersonalInformationSection/>
        <QuestionsSection/>
        <ProfileSection/>
       
        <AnalysesSection/>
        <SettingsSection/>
        <GoalSection/>
        <ActivitySection/>
        <CalendarSection/>
        <DesignSystemSection/>
        <TestingColorSection/>
        <AccessibilitySection/>
  
       
        <MoreSection/>
       
      {/* Footer */}
      <Footer />
    </ThemeProvider>
  );
};

export default VirtualNutritionist;
