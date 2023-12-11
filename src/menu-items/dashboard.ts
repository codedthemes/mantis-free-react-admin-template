// assets
import { DashboardOutlined, CrownOutlined } from '@ant-design/icons';

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Life Board',
      type: 'item',
      url: '/dashboard',
      icon: DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'epics',
      title: 'Epics',
      type: 'item',
      url: '/epics-page',
      icon: CrownOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
