// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const overview = {
  id: 'group-overview',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'overview',
      title: 'Overview',
      type: 'item',
      url: '/overview',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    }
  ]
};

export default overview;
