// assets
import DescriptionIcon from '@mui/icons-material/Description';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'authentication',
  title: 'Formulare',
  type: 'group',
  children: [
    {
      id: 'mitarbeiter',
      title: 'Mitarbeiter',
      type: 'item',
      url: '/',
      icon: PeopleAltIcon
    },
    {
      id: 'forms',
      title: 'Formulare',
      type: 'item',
      url: '/form/overview',
      matchingUrlRegexp: /\/form\/[^/]{8,}$/,
      icon: DescriptionIcon
    }
  ]
};

export default pages;
