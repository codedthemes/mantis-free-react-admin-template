// assets
import { SwitchAccountOutlined, BackupTableOutlined } from '@mui/icons-material';

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
      icon: SwitchAccountOutlined
    },
    {
      id: 'forms',
      title: 'Formulare',
      type: 'item',
      url: '/office/form/overview',
      matchingUrlRegexp: /\/form\/[^/]{8,}$/,
      icon: BackupTableOutlined
    }
  ]
};

export default pages;
