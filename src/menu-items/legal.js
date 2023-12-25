// assets
import NotesIcon from '@mui/icons-material/Notes';
import LockIcon from '@mui/icons-material/Lock';

// ==============================|| MENU ITEMS - LEGAL ||============================== //

const legal = {
  id: 'legal',
  title: 'Rechtliches',
  type: 'group',
  children: [
    {
      id: 'imprint',
      title: 'Impressum',
      type: 'item',
      url: '/',
      icon: NotesIcon
    },
    {
      id: 'data-privacy',
      title: 'Datenschutzerklärung',
      type: 'item',
      url: '/',
      icon: LockIcon
    }
  ]
};

export default legal;
