// assets
import { DashboardOutlined } from '@ant-design/icons';

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Life Board',
      type: 'item',
      url: '/',
      icon: DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'epics',
      title: 'Epics',
      type: 'item',
      url: '/epics-page',
      icon: DashboardOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
