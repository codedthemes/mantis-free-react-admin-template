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
            id: 'util-secondary-marketplace',
            title: 'Stake Market',
            type: 'item',
            url: '/marketplace',
            icon: icons.FontSizeOutlined
        },
        {
            id: 'util-wallets',
            title: 'Wallets',
            type: 'item',
            url: '/wallets',
            icon: icons.BgColorsOutlined
        },
        {
            id: 'bill_pay',
            title: 'Bill Pay',
            type: 'item',
            url: '/shadow',
            icon: icons.BarcodeOutlined
        },
        {
            id: 'loan',
            title: 'Loan XNO',
            type: 'item',
            url: '/icons/ant',
            icon: icons.AntDesignOutlined,
            breadcrumbs: false
        },
        {
            id: 'stake',
            title: 'Stake XNO',
            type: 'item',
            url: '/stake',
            icon: icons.AntDesignOutlined,
            breadcrumbs: false
        }
    ]
};

export default utilities;
