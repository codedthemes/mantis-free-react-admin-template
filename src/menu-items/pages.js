// assets
import { SwitchAccountOutlined, BackupTableOutlined, WalletOutlined } from '@mui/icons-material';

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'authentication',
  title: 'Angaben',
  type: 'group',
  children: [
    {
      id: 'forms',
      title: 'Angaben',
      type: 'item',
      url: '/office/form/overview',
      matchingUrlRegexp: /\/form\/[^/]{8,}$/,
      icon: BackupTableOutlined
    },
    {
      id: 'auswertung',
      title: 'Auswertung',
      type: 'item',
      url: '/office/review',
      icon: SwitchAccountOutlined
    },
    {
      id: 'billing',
      title: 'Abonnement',
      type: 'item',
      url: 'office/billing',
      icon: WalletOutlined
    }
  ]
};

export default pages;
