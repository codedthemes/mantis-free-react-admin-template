import { useState, useEffect } from 'react';

// material-ui
import {
    Avatar,
    AvatarGroup,
    Box,
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
import { Tabs, Table, Input, Button, Space } from 'antd';

// project import
import OrdersTable from './OrdersTable';
import IncomeAreaChart from './IncomeAreaChart';
import MonthlyBarChart from './MonthlyBarChart';
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import { useAuth } from 'pages/authentication/auth-forms/AuthProvider';

// assets
import { GiftOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';

// firebase
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
        title: 'Borrower',
        dataIndex: 'borrower'
    },
    {
        title: 'Lender',
        dataIndex: 'lender'
    },
    {
        title: 'Created',
        dataIndex: 'created'
    },
    {
        title: 'Principal',
        dataIndex: 'principal'
    },
    {
        title: 'Payment Count',
        dataIndex: 'payments'
    }
];

const load_endpoint = (user, url, success_callback, failure_callback) => {
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`,
            'X-User-Uid': `${user.uid}`
        }
    })
        .then((res) => res.json())
        .then(
            (result) => {
                success_callback(result);
            },
            (error) => {
                failure_callback(error);
            }
        );
};

const Bills = () => {
    const [dataLoading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const { user, loading } = useAuth();

    useEffect(() => {
        load_endpoint(
            user,
            'http://127.0.0.1:8000/loans/accepted?recent=True',
            (result) => {
                setItems(result);
                setLoading(false);
            },
            (error) => {
                setLoading(false);
            }
        );
    }, []);

    return (
        <div>
            <Table columns={columns} dataSource={items} />
        </div>
    );
};

const Interest = () => {
    const [dataLoading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const { user, loading } = useAuth();

    useEffect(() => {
        load_endpoint(
            user,
            'http://127.0.0.1:8000/loans/accepted?recent=True',
            (result) => {
                setItems(result);
                setLoading(false);
            },
            (error) => {
                setLoading(false);
            }
        );
    }, []);

    return (
        <div>
            <Table columns={columns} dataSource={items} />
        </div>
    );
};

const BillHistory = () => {
    const [dataLoading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const { user, loading } = useAuth();

    useEffect(() => {
        load_endpoint(
            user,
            'http://127.0.0.1:8000/loans/accepted?recent=True',
            (result) => {
                setItems(result);
                setLoading(false);
            },
            (error) => {
                setLoading(false);
            }
        );
    }, []);

    return (
        <div>
            <Table columns={columns} dataSource={items} />
        </div>
    );
};

const InterestHistory = () => {
    const [dataLoading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const { user, loading } = useAuth();

    useEffect(() => {
        load_endpoint(
            user,
            'http://127.0.0.1:8000/loans/accepted?recent=True',
            (result) => {
                setItems(result);
                setLoading(false);
            },
            (error) => {
                setLoading(false);
            }
        );
    }, []);

    return (
        <div>
            <Table columns={columns} dataSource={items} />
        </div>
    );
};

const DashboardDefault = () => {
    const [value, setValue] = useState('today');
    const [slot, setSlot] = useState('week');
    const navigate = useNavigate();

    return (
        <Grid container>
            {/* row 3 */}
            <Tabs
                defaultActiveKey="1"
                onChange={console.log}
                items={[
                    {
                        label: `Upcoming Bills Due`,
                        key: '1',
                        children: <Bills></Bills>
                    },
                    {
                        label: `Upcoming Interest Payments`,
                        key: '2',
                        children: <Interest></Interest>
                    },
                    {
                        label: `Bill Payment History`,
                        key: '3',
                        children: <BillHistory></BillHistory>
                    },
                    {
                        label: `Interest Payment History`,
                        key: '4',
                        children: <InterestHistory></InterestHistory>
                    }
                ]}
            />
        </Grid>
    );
};

export default DashboardDefault;
