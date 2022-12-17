import { useState } from 'react';

// material-ui
import {
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
import { EditOutlined, EllipsisOutlined, GiftOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Skeleton, Switch } from 'antd';

// project import
import OrdersTable from './OrdersTable';
import IncomeAreaChart from './IncomeAreaChart';
import MonthlyBarChart from './MonthlyBarChart';
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';

// assets
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

const { Meta } = Card;
const Cards = () => {
    // https://ant.design/components/card/#
    const [loading, setLoading] = useState(true);
    const onChange = (checked) => {
        setLoading(!checked);
    };
    return (
        <>
            <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
                <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                />
            </Card>

            <Card
                style={{
                    width: 300,
                    marginTop: 16
                }}
                actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
            >
                <Skeleton loading={loading} avatar active>
                    <Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title="Card title"
                        description="This is the description"
                    />
                </Skeleton>
            </Card>
        </>
    );
};

const WalletDefault = () => {
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
            <Grid item xs={12} md={7} lg={8}>
                <Cards />
            </Grid>
        </Grid>
    );
};

export default WalletDefault;
