// assets
import { DashboardOutlined, MenuOutlined, PlusSquareOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  MenuOutlined,
  PlusSquareOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'products',
      title: 'Our Products',
      type: 'item',
      url: '/ourproducts',
      icon: icons.MenuOutlined,
      breadcrumbs: false
    },
    {
      id: 'addProds',
      title: 'Add Products',
      type: 'item',
      url: '/addproducts',
      icon: icons.PlusSquareOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
