import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import SchoolIcon from '@material-ui/icons/School';
import PaletteIcon from '@material-ui/icons/Palette';
import TimelineIcon from '@material-ui/icons/Timeline';
import HomeIcon from '@material-ui/icons/Home';
import Persona from '../components/Persona';
import Home from '../components/Home';


const Education: React.FC = (): JSX.Element => {
  return (
    <h1>Education</h1>
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
