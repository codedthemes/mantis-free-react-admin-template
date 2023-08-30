// assets
import EmailIcon from '@mui/icons-material/Email';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: 'Support',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'Kontakt',
      type: 'item',
      url: '/',
      // url: '/sample-page',
      icon: EmailIcon
    },
    {
      id: 'documentation',
      title: 'Dokumentation',
      type: 'item',
      url: '/',
      icon: ManageSearchIcon
    }
  ]
};

export default support;
