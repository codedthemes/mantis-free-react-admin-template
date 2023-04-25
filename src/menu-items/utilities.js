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
            url: '/marketplace/loan',
            icon: icons.FontSizeOutlined
        },
        {
            id: 'util-secondary-marketplace',
            title: 'My Loans',
            type: 'item',
            url: '/loan',
            icon: icons.BgColorsOutlined
        },
        {
            id: 'bill_pay',
            title: 'Bill Pay',
            type: 'item',
            url: '/shadow',
            icon: icons.BarcodeOutlined
        }
    ]
};

export default utilities;
