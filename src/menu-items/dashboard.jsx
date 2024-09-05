// assets
import { DashboardOutlined, CalculatorOutlined  } from '@ant-design/icons';

// icons
const icons = {
  Dashboard: DashboardOutlined,
  Calculator: CalculatorOutlined
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
      icon: icons.Dashboard,
      breadcrumbs: false
    },
    {
      id: 'calculator',
      title: 'Calculator',
      type: 'item',
      url: '/calculator',
      icon: icons.Calculator,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
