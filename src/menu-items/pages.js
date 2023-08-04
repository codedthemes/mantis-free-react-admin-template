// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

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
      // url: '/login',
      icon: icons.LoginOutlined,
      target: true
    },
    {
      id: 'forms',
      title: 'Formulare',
      type: 'item',
      url: '/',
      // url: '/register',
      icon: icons.ProfileOutlined,
      target: true
    }
  ]
};

export default pages;
