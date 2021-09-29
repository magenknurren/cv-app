import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import SchoolIcon from '@mui/icons-material/School';
import PaletteIcon from '@mui/icons-material/Palette';
import TimelineIcon from '@mui/icons-material/Timeline';
import HomeIcon from '@mui/icons-material/Home';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import Persona from '../components/Persona';
import Home from '../components/Home';
import Education from '../components/Education';
import EducationTimeline from '../components/EducationTimeline';



const Experience: React.FC = (): JSX.Element => {
  return (
    <h1>Experience</h1>
  );
};

const SkillsKnowledge: React.FC = (): JSX.Element => {
  return (
    <h1>SkillsKnowledge</h1>
  );
};

const Statistics: React.FC = (): JSX.Element => {
  return (
    <h1>Statistics</h1>
  );
};

const Downloads: React.FC = (): JSX.Element => {
  return (
    <h1>Downloads</h1>
  );
};

export interface IRoute {
  path: string;
  sidebarName: string;
  icon: any;
  component: React.ComponentType;
}

const Routes: IRoute[] = [
  {
    path: '/',
    sidebarName: 'Home',
    icon: <HomeIcon />,
    component: Home
  },
  {
    path: '/persona',
    sidebarName: 'Persona',
    icon: <PersonIcon />,
    component: Persona
  },
  {
    path: '/education',
    sidebarName: 'Education',
    icon: <SchoolIcon />,
    component: Education
  },
  {
    path: '/education-timeline',
    sidebarName: 'Education-Timeline',
    icon: <SchoolIcon />,
    component: EducationTimeline
  },
  {
    path: '/experience',
    sidebarName: 'Experience',
    icon: <TransferWithinAStationIcon />,
    component: Experience
  },
  {
    path: '/skills_knowledge',
    sidebarName: 'Skills and Knowledge',
    icon: <PaletteIcon />,
    component: SkillsKnowledge
  },
  {
    path: '/statistics',
    sidebarName: 'Statistics',
    icon: <TimelineIcon />,
    component: Statistics
  },
  {
    path: '/downloads',
    sidebarName: 'Downloads',
    icon: <CloudDownloadIcon />,
    component: Downloads
  },
];

export default Routes;
