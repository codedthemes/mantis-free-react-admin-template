import { useState, useEffect, useRef } from 'react';

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
import { Tabs, Table, Input, Button, Space, Form, InputNumber, Modal, DatePicker } from 'antd';
import moment from 'moment';

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

const ActiveLoans = () => {
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
            <Table columns={columns} dataSource={[]} />
        </div>
    );
};

const LoanOffers = () => {
    const [dataLoading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const { user, loading } = useAuth();

    useEffect(() => {
        load_endpoint(
            user,
            'http://127.0.0.1:8000/loans/open?recent=True',
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
            <Table columns={columns} dataSource={[]} />
        </div>
    );
};

const Applications = () => {
    const rootRef = useRef(null);
    const [isOfferModalVisible, setIsOfferModalVisible] = useState(false);
    const [form] = Form.useForm();
    const [dataLoading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [expiryDate, setExpiryDate] = useState(null);
    const [maturityDate, setMaturityDate] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const { user, loading } = useAuth();

    const handleOfferCancel = () => {
        setIsOfferModalVisible(false);
    };

    const handleOfferOk = () => {
        form.validateFields()
            .then((values) => {
                form.resetFields();
                createLoanOffer(values, user);
            })
            .catch((info) => {
                console.log('Validate Failed:', info);
            });
    };

    // Create loan offer function
    const createLoanOffer = (values, user) => {
        console.log(values);
        fetch('http://localhost:8000/loan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`,
                'X-User-Uid': `${user.uid}`
            },
            body: JSON.stringify(values)
        })
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setIsOfferModalVisible(false);
                },
                (error) => {
                    console.log(error);
                }
            );
    };

    const handleButtonClick = (record) => {
        console.log('Button was clicked for record: ', record);
        setIsOfferModalVisible(true); // show the modal
    };

    const loanApplicationColumns = [
        {
            title: 'Application ID',
            dataIndex: 'application',
            key: 'application'
        },
        {
            title: 'Borrower',
            dataIndex: 'borrower',
            key: 'borrower'
        },
        {
            title: 'Asking',
            dataIndex: 'amount_asking',
            key: 'amount_asking'
        },
        {
            title: 'Created',
            dataIndex: 'created',
            key: 'created'
        },
        {
            title: 'Closed',
            dataIndex: 'closed',
            render: (text, record) => (record.closed ? 'Yes' : 'No'),
            key: 'closed'
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (text, record) => <Button onClick={() => handleButtonClick(record)}>Fund</Button>,
            key: 'action'
        }
    ];

    useEffect(() => {
        load_endpoint(
            user,
            'http://127.0.0.1:8000/loan/application?recent=True',
            (result) => {
                setItems(result);
                setLoading(false);
            },
            (error) => {
                setLoading(false);
            }
        );
    }, []);

    const addKeys = (items) => {
        // Add key prop to each item in the array
        return items.map((item, index) => {
            return { ...item, key: index };
        });
    };

    const handleOfferExpiryDateChange = (dates) => {
        if (dates && dates.length > 0) {
            setExpiryDate(dates[0]);
        } else {
            setExpiryDate(null);
        }
    };

    const handleMaturityDateChange = (dates) => {
        if (dates && dates.length > 0) {
            setMaturityDate(dates[0]);
        } else {
            setMaturityDate(null);
        }
    };

    const handleStartDateChange = (dates) => {
        if (dates && dates.length > 0) {
            setStartDate(dates[0]);
        } else {
            setStartDate(null);
        }
    };

    return (
        <div ref={rootRef}>
            <Modal
                title="Create Loan Offer"
                visible={isOfferModalVisible}
                onOk={handleOfferOk}
                onCancel={handleOfferCancel}
                destroyOnClose={true}
            >
                <Form form={form} layout="vertical">
                    <Form.Item name="start" label="Start Date" rules={[{ required: true, message: 'Date that the loan starts' }]}>
                        <DatePicker
                            showTime
                            format="YYYY-MM-DD HH:mm:ss"
                            onChange={handleStartDateChange}
                            value={expiryDate ? [moment(expiryDate)] : []}
                        />
                    </Form.Item>
                    <Form.Item
                        name="maturity"
                        label="Maturity Date"
                        rules={[{ required: true, message: "Date that the borrower's final loan payment is due" }]}
                    >
                        <DatePicker
                            showTime
                            format="YYYY-MM-DD HH:mm:ss"
                            onChange={handleMaturityDateChange}
                            value={maturityDate ? [moment(maturityDate)] : []}
                        />
                    </Form.Item>
                    <Form.Item
                        name="payments"
                        label="Number of Payments"
                        rules={[{ required: true, message: 'Number of payment intervals for the borrower' }]}
                    >
                        <InputNumber min={0} />
                    </Form.Item>
                    <Form.Item
                        name="interest"
                        label="Interest Rate"
                        rules={[{ required: true, message: 'Amount of interest on the loan' }]}
                    >
                        <InputNumber min={0} max={100} />
                    </Form.Item>
                    <Form.Item name="expiry" label="Offer Expiry" rules={[{ required: true, message: 'Date that the offer will expire' }]}>
                        <DatePicker
                            showTime
                            format="YYYY-MM-DD HH:mm:ss"
                            onChange={handleOfferExpiryDateChange}
                            value={expiryDate ? [moment(expiryDate)] : []}
                        />
                    </Form.Item>
                </Form>
            </Modal>
            <Table columns={loanApplicationColumns} dataSource={addKeys(items)} />
        </div>
    );
};

const Vouches = () => {
    const [dataLoading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const { user, loading } = useAuth();

    useEffect(() => {
        load_endpoint(
            user,
            'http://127.0.0.1:8000/vouch?recent=True',
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
                        label: `Active Loans`,
                        key: '1',
                        children: <ActiveLoans></ActiveLoans>
                    },
                    {
                        label: `Loan Offers`,
                        key: '2',
                        children: <LoanOffers></LoanOffers>
                    },
                    {
                        label: `Loan Applications`,
                        key: '3',
                        children: <Applications></Applications>
                    },
                    {
                        label: `Credit Vouches`,
                        key: '4',
                        children: <Vouches></Vouches>
                    }
                ]}
            />
        </Grid>
    );
};

export default DashboardDefault;
