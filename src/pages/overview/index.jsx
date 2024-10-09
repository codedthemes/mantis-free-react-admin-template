import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import MainCard from 'components/MainCard';
import AnalyticSummary from 'components/cards/statistics/AnalyticSummary';
import AssetsTable from './AssetsTable';

import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import transactionService from '../../api/external/services/TransactionService';
import { CircularProgress } from '@mui/material';
import Button from '@mui/material/Button';
import { PlusCircleOutlined } from '@ant-design/icons';

function createData(
  coingecko_index,
  coin_image,
  coin_name,
  risk,
  coin_symbol,
  optimal_allocation_percentage,
  current_allocation_percentage,
  current_balance,
  profit_and_loss,
  profit_and_loss_percentage
) {
  return {
    coingecko_index,
    coin_image,
    coin_name,
    risk,
    coin_symbol,
    optimal_allocation_percentage,
    current_allocation_percentage,
    current_balance,
    profit_and_loss,
    profit_and_loss_percentage
  };
}

export default function DashboardDefault() {
  const { data, error, isLoading } = useQuery('transactionOverview', transactionService.fetchTransactionOverview);

  const [coins, setCoins] = useState([]);
  const [overviewData, setOverviewData] = useState({});

  // Use useEffect to handle state updates when data changes
  useEffect(() => {
    if (data && !isLoading && !error) {
      const transactionsOverviewData = data.data;

      const fetchedRows = transactionsOverviewData.coins.map((coin) =>
        createData(
          coin.coingecko_index,
          coin.coin_image,
          coin.coin_name,
          1,
          coin.coin_symbol,
          coin.optimal_allocation_percentage,
          coin.current_allocation_percentage,
          coin.current_balance.toFixed(8),
          coin.profit_and_loss.toFixed(2),
          coin.profit_and_loss_percentage.toFixed(2)
        )
      );

      setCoins(fetchedRows);
      setOverviewData(transactionsOverviewData.resume);
    }
  }, [data, isLoading, error]);

  if (isLoading) {
    return <CircularProgress variant="determinate" />;
  }

  if (error) {
    return <div>Ops... Houve algum problema, tente novamente ou contate nosso suporte!</div>;
  }

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Portifólio</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticSummary title="Aporte" count={`$${overviewData?.investment?.toFixed(2)?.toString()}`} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticSummary title="Saldo Estimado" count={`$${overviewData?.balance?.toFixed(2).toString()}`} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticSummary
          title="Lucro Estimado"
          count={`$${overviewData?.profit_and_loss?.toFixed(2).toString()}`}
          percentage={overviewData?.profit_and_loss_percentage}
          color={overviewData?.profit_and_loss > 0 ? 'success' : 'error'}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticSummary title="Altcoins em BTC" count={overviewData?.altcoins_in_bitcoin?.toFixed(2).toString()} isLoss color="warning" />
      </Grid>

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

      {/* Cards para o futuro */}

      {/*<Grid item xs={12} md={7} lg={8}>*/}
      {/*  <PerformanceCard />*/}
      {/*</Grid>*/}
      {/*<Grid item xs={12} md={5} lg={4}>*/}
      {/*  <Grid container alignItems="center" justifyContent="space-between">*/}
      {/*    <Grid item>*/}
      {/*      <Typography variant="h5">Visão Geral do Portfólio</Typography>*/}
      {/*    </Grid>*/}
      {/*    <Grid item />*/}
      {/*  </Grid>*/}
      {/*  <MainCard sx={{ mt: 2 }} content={false}>*/}
      {/*    <Box sx={{ p: 3, pb: 0 }}>*/}
      {/*      <Stack spacing={2}>*/}
      {/*        <Typography variant="h6" color="text.secondary">*/}
      {/*          Estatisticas Desta Semana*/}
      {/*        </Typography>*/}
      {/*        <Typography variant="h3">$254</Typography>*/}
      {/*      </Stack>*/}
      {/*    </Box>*/}
      {/*    <MonthlyBarChart />*/}
      {/*  </MainCard>*/}
      {/*</Grid>*/}

      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Ativos</Typography>
          </Grid>
          {/*<Grid item>*/}
          {/*  <Button variant="outlined" color="success" startIcon={<PlusCircleOutlined />}>*/}
          {/*    Add*/}
          {/*  </Button>*/}
          {/*</Grid>*/}
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <AssetsTable rows={coins} />
        </MainCard>
      </Grid>

      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between" sx={{ marginBottom: '28px' }}>
          <Grid item>
            <Typography variant="h5">Expectativa de Retorno</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>
            <ListItemButton>
              <ListItemText primary="% Retorno Atual" />
              <Typography variant="h5">12.96%</Typography>
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary="Investimento Seguro" />
              <Typography variant="h5">$5,043.14</Typography>
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary="Investimento Total" />
              <Typography variant="h5">$7,793.17</Typography>
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary="% Investimento Total" />
              <Typography variant="h5">287.68%</Typography>
            </ListItemButton>
          </List>

          {/* Grafico para alterações futuras */}
          {/*<ReportAreaChart />*/}
        </MainCard>
      </Grid>
    </Grid>
  );
}
