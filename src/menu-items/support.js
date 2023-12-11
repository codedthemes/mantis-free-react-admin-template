// assets
import { AuditOutlined, QuestionOutlined, SettingOutlined, FileProtectOutlined } from '@ant-design/icons';

// icons

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: 'Support',
  type: 'group',
  children: [
    {
      id: 'feedback-page',
      title: 'Feedback',
      type: 'item',
      url: '/feedback-page',
      icon: AuditOutlined
    },
    {
      id: 'settings-page',
      title: 'Settings',
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
    // {
    //   id: 'terms',
    //   title: 'Terms',
    //   type: 'item',
    //   url: '/terms-page',
    //   icon: FileProtectOutlined
    // }
  ]
};

export default support;
