// material-ui
// import Avatar from '@mui/material/Avatar';
// import AvatarGroup from '@mui/material/AvatarGroup';
// import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

// import List from '@mui/material/List';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
// import ListItemText from '@mui/material/ListItemText';
// import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// project import
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
// import MonthlyBarChart from './MonthlyBarChart';
// import ReportAreaChart from './ReportAreaChart';
// import UniqueVisitorCard from './UniqueVisitorCard';
// import SaleReportCard from './SaleReportCard';
import OrdersTable from './OrdersTable';

// assets
// import GiftOutlined from '@ant-design/icons/GiftOutlined';
// import MessageOutlined from '@ant-design/icons/MessageOutlined';
// import SettingOutlined from '@ant-design/icons/SettingOutlined';
// import avatar1 from 'assets/images/users/avatar-1.png';
// import avatar2 from 'assets/images/users/avatar-2.png';
// import avatar3 from 'assets/images/users/avatar-3.png';
// import avatar4 from 'assets/images/users/avatar-4.png';

import supabase from "../../service/supabase"
import { useState,useEffect } from 'react';

// avatar style
// const avatarSX = {
//   width: 36,
//   height: 36,
//   fontSize: '1rem'
// };

// // action style
// const actionSX = {
//   mt: 0.75,
//   ml: 1,
//   top: 'auto',
//   right: 'auto',
//   alignSelf: 'flex-start',
//   transform: 'none'
// };

// ==============================|| DASHBOARD - DEFAULT ||============================== //

export default function DashboardDefault() {
  const [reqCount,setReqCount] = useState(0)
  const [settledReq,setSettledRes] = useState([])
  const [claimReq,setClaimRes] = useState([])
  const [unconfirmed,setUnconfirmed] = useState(0)

  

  const getAllRequest = async () => {
    try {
      const { data, error } = await supabase.from('refundpolicy').select('id', { count: 'exact' });
      if (error) {
        throw error;
      }

      setReqCount(data.length);
    } catch (error) {
      alert(error.message);
    }
  };
  const getSettledRes = async () => {
    try {
      const { data, error } = await supabase.from('refundpolicy').select('charge_amount', { count: 'exact' }).eq("status","POLICY");
      if (error) {
        throw error;
      }

      setSettledRes(data);
    } catch (error) {
      alert(error.message);
    }
  };
  const getClaimRes = async () => {
    try {
      const { data, error } = await supabase.from('refundpolicy').select('charge_amount,ticket_price', { count: 'exact' }).eq("status","CLAIM");
      if (error) {
        throw error;
      }

      setClaimRes(data);
    } catch (error) {
      alert(error.message);
    }
  };
  const getUnConfirmed = async () => {
    try {
      const { data, error } = await supabase.from('refundpolicy').select('id', { count: 'exact' }).eq("status","OFFER");
      if (error) {
        throw error;
      }

      setUnconfirmed(data.length);
    } catch (error) {
      alert(error.message);
    }
  };
  // const test = async () => {
  //   try {

  //     const { data, error } = await supabase
  //     .from('refundpolicy')
  //     .update({ status: 'POLICY' })
  //     .eq("status","CLAIM")
  //     if (error) {
  //       throw error;
  //     }

  //     setUnconfirmed(data.length);
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };
  
  // Amount Data fetching


  useEffect(() => {
    getAllRequest();
    getSettledRes()
    getClaimRes()
    getUnConfirmed()
    // test()
  }, []);



  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Value</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total Sales" count={` ${
      (settledReq?.reduce((sum, record) => sum + record.charge_amount, 0) +
        claimReq?.reduce((sum, record) => sum + record.charge_amount, 0)).toFixed(2)
        }`} percentage={59.3} extra="$1,000" isMoney />
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total Claims" count={`${claimReq?.reduce((sum, record) => sum + record.ticket_price, 0).toFixed(2)}`} percentage={70.5} extra="$1,000" isMoney />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Profit" count={` ${

          (settledReq?.reduce((sum, record) => sum + record.charge_amount, 0) +
        claimReq?.reduce((sum, record) => sum + record.charge_amount, 0)).toFixed(2) - claimReq?.reduce((sum, record) => sum + record.ticket_price, 0).toFixed(2)
        
        
        }`} percentage={27.4} isLoss color="warning" extra="$1,000" isMoney />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Claim Percent" count={(((claimReq.length / (settledReq?.length + claimReq.length) )* 100)).toFixed(2) + " %"} percentage={27.4} isLoss color="warning" extra="$1,000"  />
      </Grid>
      {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Counts</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total Request" count={reqCount} percentage={59.3} extra="1,000" />
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Not Purchased" count={unconfirmed} percentage={70.5} extra="1,000" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Purchased" count={settledReq?.length + claimReq.length} percentage={27.4} isLoss color="warning" extra="1,000" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="No of Claims" count={claimReq.length} percentage={27.4} isLoss color="warning" extra="1,000" />
      </Grid>

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

      {/* row 2 */}
      {/* <Grid item xs={12} md={7} lg={8}>
        <UniqueVisitorCard />
      </Grid> */}
      {/* <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Income Overview</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h6" color="text.secondary">
                This Week Statistics
              </Typography>
              <Typography variant="h3">$7,650</Typography>
            </Stack>
          </Box>
          <MonthlyBarChart />
        </MainCard>
      </Grid> */}

      {/* row 3 */}
      <Grid item xs={12} md={7} lg={12}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Request Details</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <OrdersTable />
        </MainCard>
      </Grid>
      {/* <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Analytics Report</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>
            <ListItemButton divider>
              <ListItemText primary="Company Finance Growth" />
              <Typography variant="h5">+45.14%</Typography>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemText primary="Company Expenses Ratio" />
              <Typography variant="h5">0.58%</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Business Risk Cases" />
              <Typography variant="h5">Low</Typography>
            </ListItemButton>
          </List>
          <ReportAreaChart />
        </MainCard>
      </Grid> */}

      {/* row 4 */}
      {/* <Grid item xs={12} md={7} lg={8}>
        <SaleReportCard />
      </Grid> */}
      {/* <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Transaction History</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List
            component="nav"
            sx={{
              px: 0,
              py: 0,
              '& .MuiListItemButton-root': {
                py: 1.5,
                '& .MuiAvatar-root': avatarSX,
                '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
              }
            }}
          >
            <ListItemButton divider>
              <ListItemAvatar>
                <Avatar sx={{ color: 'success.main', bgcolor: 'success.lighter' }}>
                  <GiftOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">Order #002434</Typography>} secondary="Today, 2:00 AM" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                    + $1,430
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    78%
                  </Typography>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemAvatar>
                <Avatar sx={{ color: 'primary.main', bgcolor: 'primary.lighter' }}>
                  <MessageOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">Order #984947</Typography>} secondary="5 August, 1:45 PM" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                    + $302
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    8%
                  </Typography>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar sx={{ color: 'error.main', bgcolor: 'error.lighter' }}>
                  <SettingOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">Order #988784</Typography>} secondary="7 hours ago" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                    + $682
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    16%
                  </Typography>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
          </List>
        </MainCard>
        <MainCard sx={{ mt: 2 }}>
          <Stack spacing={3}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Stack>
                  <Typography variant="h5" noWrap>
                    Help & Support Chat
                  </Typography>
                  <Typography variant="caption" color="secondary" noWrap>
                    Typical replay within 5 min
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <AvatarGroup sx={{ '& .MuiAvatar-root': { width: 32, height: 32 } }}>
                  <Avatar alt="Remy Sharp" src={avatar1} />
                  <Avatar alt="Travis Howard" src={avatar2} />
                  <Avatar alt="Cindy Baker" src={avatar3} />
                  <Avatar alt="Agnes Walker" src={avatar4} />
                </AvatarGroup>
              </Grid>
            </Grid>
            <Button size="small" variant="contained" sx={{ textTransform: 'capitalize' }}>
              Need Help?
            </Button>
          </Stack>
        </MainCard>
      </Grid> */}
    </Grid>
  );
}
