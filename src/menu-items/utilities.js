// assets
import {
    AppstoreAddOutlined,
    AntDesignOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [
        {
            id: 'util-marketplace',
            title: 'Loan Market',
            type: 'item',
            url: '/marketplace',
            icon: icons.FontSizeOutlined
        },
        {
            id: 'util-my-loans',
            title: 'My Loans',
            type: 'item',
            url: '/loans',
            icon: icons.BgColorsOutlined
        },
        {
            id: 'util-bill-pay',
            title: 'Bill Pay',
            type: 'item',
            url: '/bills',
            icon: icons.BarcodeOutlined
        },
        {
            id: 'util-credit-rating',
            title: 'Credit Rating',
            type: 'item',
            url: '/credit',
            icon: icons.BarcodeOutlined
        }
    ]
};

export default utilities;
