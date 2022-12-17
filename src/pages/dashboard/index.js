import { useState } from 'react';

// material-ui
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Grid,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemSecondaryAction,
    ListItemText,
    Stack,
    Typography
} from '@mui/material';

// ant design
import { Tabs } from 'antd';
import { Table } from 'antd';

// project import
import OrdersTable from './OrdersTable';
import IncomeAreaChart from './IncomeAreaChart';
import MonthlyBarChart from './MonthlyBarChart';
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';

// assets
import { GiftOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';

// firebase
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    getRedirectResult,
    sendEmailVerification,
    signInWithPopup,
    GoogleAuthProvider,
    TwitterAuthProvider,
    GithubAuthProvider
} from 'firebase/auth';

// react
import { useNavigate } from 'react-router-dom';

// the firebase auth api key is intended to be public
// https://stackoverflow.com/a/37484053
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
    apiKey: 'AIzaSyBQ8rb3jkIsusGKhGwGm-ri9VAjoof1OKA',
    authDomain: 'nanocryptobank.firebaseapp.com',
    projectId: 'nanocryptobank',
    storageBucket: 'nanocryptobank.appspot.com',
    messagingSenderId: '950014241040',
    appId: '1:950014241040:web:16e7f8fa0f59bcaf7b5d95',
    measurementId: 'G-H4F5Z43EKN'
};

// avatar style
const avatarSX = {
    width: 36,
    height: 36,
    fontSize: '1rem'
};

// action style
const actionSX = {
    mt: 0.75,
    ml: 1,
    top: 'auto',
    right: 'auto',
    alignSelf: 'flex-start',
    transform: 'none'
};

// sales report status
const status = [
    {
        value: 'today',
        label: 'Today'
    },
    {
        value: 'month',
        label: 'This Month'
    },
    {
        value: 'year',
        label: 'This Year'
    }
];

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const columns = [
    {
        title: 'Name',
        dataIndex: 'name'
    },
    {
        title: 'Age',
        dataIndex: 'age'
    },
    {
        title: 'Address',
        dataIndex: 'address'
    }
];
const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`
    });
}

const StakeDashboard = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);
    const start = () => {
        setLoading(true);
        // ajax request after empty completing
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
        <div>
            <div
                style={{
                    marginBottom: 16
                }}
            >
                <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
                    Reload
                </Button>
                <span
                    style={{
                        marginLeft: 8
                    }}
                >
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                </span>
            </div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </div>
    );
};

const DashboardDefault = () => {
    const [value, setValue] = useState('today');
    const [slot, setSlot] = useState('week');
    const navigate = useNavigate();
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    auth.useDeviceLanguage();
    const user = auth.getCurrentUser;
    console.log(user);

    return (
        <Grid container>
            {/* row 3 */}
            <Tabs
                defaultActiveKey="1"
                onChange={console.log}
                items={[
                    {
                        label: `Pre Stake`,
                        key: '1',
                        children: <StakeDashboard></StakeDashboard>
                    },
                    {
                        label: `Stake`,
                        key: '2',
                        children: `Content of Tab Pane 2`
                    },
                    {
                        label: `Post Stake`,
                        key: '3',
                        children: `Content of Tab Pane 3`
                    }
                ]}
            />
        </Grid>
    );
};

export default DashboardDefault;
