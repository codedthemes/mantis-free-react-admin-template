import { DashboardOutlined } from '@ant-design/icons';

const icons = {
  DashboardOutlined
};

const overview = {
  id: 'group-overview',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'portfolio',
      title: 'Portifólio',
      type: 'item',
      url: '/',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    }
  ]
};

export default overview;
