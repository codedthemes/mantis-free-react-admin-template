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
            id: 'api_doc',
            title: 'API Docs',
            type: 'item',
            url: 'https://codedthemes.gitbook.io/mantis-react/',
            icon: icons.QuestionOutlined,
            external: true,
            target: true
        },
        {
            id: 'user_doc',
            title: 'User Docs',
            type: 'item',
            url: 'https://codedthemes.gitbook.io/mantis-react/',
            icon: icons.QuestionOutlined,
            external: true,
            target: true
        },
        {
            id: 'about_us',
            title: 'About Us',
            type: 'item',
            url: '/sample-page',
            icon: icons.ChromeOutlined
        },
        {
            id: 'contact',
            title: 'Contact Us',
            type: 'item',
            url: '/sample-page',
            icon: icons.ChromeOutlined
        },
        {
            id: 'ir',
            title: 'Investor Relations',
            type: 'item',
            url: '/sample-page',
            icon: icons.ChromeOutlined
        }
    ]
};

export default support;
