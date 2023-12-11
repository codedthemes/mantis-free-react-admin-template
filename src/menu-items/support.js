// assets
import { ChromeOutlined, QuestionOutlined, SettingOutlined } from '@ant-design/icons';

// icons

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: 'Support',
  type: 'group',
  children: [
    // {
    //   id: 'sample-page',
    //   title: 'Sample Page',
    //   type: 'item',
    //   url: '/settings-page',
    //   icon: icons.ChromeOutlined
    // },
    {
      id: 'settings-page',
      title: 'Settings Page',
      type: 'item',
      url: '/settings-page',
      icon: SettingOutlined
    },
    {
      id: 'documentation',
      title: 'Documentation',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/mantis/',
      icon: QuestionOutlined,
      external: true,
      target: true
    }
  ]
};

export default support;
