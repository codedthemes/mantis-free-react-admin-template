// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: 'Support',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'Kontakt',
      type: 'item',
      url: '/',
      // url: '/sample-page',
      icon: icons.ChromeOutlined
    },
    {
      id: 'documentation',
      title: 'Dokumentation',
      type: 'item',
      url: '/',
      // url: 'https://codedthemes.gitbook.io/mantis/',
      icon: icons.QuestionOutlined,
      external: true,
      target: true
    }
  ]
};

export default support;
