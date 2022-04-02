import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import HomeIcon from '@mui/icons-material/Home';
import PaletteIcon from '@mui/icons-material/Palette';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import React from 'react';
import EducationExperience from '../components/EducationExpericence';
import Home from '../components/Home';
import Persona from '../components/Persona';


const SkillsKnowledge: React.FC = (): JSX.Element => {
  return (
    <div>
      <h2>Skills And Knowledge</h2>
      <p>coming soon</p>
    </div>
  );
};

const Downloads: React.FC = (): JSX.Element => {
  return (
    <div>
      <h2>Downloads</h2>
      <p>coming soon</p>
    </div>
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
    path: '/cv/',
    sidebarName: 'Home',
    icon: <HomeIcon />,
    component: Home
  },
  {
    path: '/cv/persona',
    sidebarName: 'Persona',
    icon: <PersonIcon />,
    component: Persona
  },
  {
    path: '/cv/education_experience',
    sidebarName: 'Education And Experience',
    icon: <SchoolIcon />,
    component: EducationExperience
  },
  {
    path: '/cv/skills_knowledge',
    sidebarName: 'Skills and Knowledge',
    icon: <PaletteIcon />,
    component: SkillsKnowledge
  },
  {
    path: '/cv/downloads',
    sidebarName: 'Downloads',
    icon: <CloudDownloadIcon />,
    component: Downloads
  },
];

export default Routes;
