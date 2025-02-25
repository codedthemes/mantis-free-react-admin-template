import { useState } from 'react';

// material-ui
import { alpha, useTheme } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { BarChart } from '@mui/x-charts/BarChart';

// project imports
import MainCard from 'components/MainCard';

// ==============================|| SALES COLUMN CHART ||============================== //

export default function SalesChart() {
  const theme = useTheme();

  const [showIncome, setShowIncome] = useState(true);
  const [showCostOfSales, setShowCostOfSales] = useState(true);

  const handleIncomeChange = () => {
    setShowIncome(!showIncome);
  };

  const handleCostOfSalesChange = () => {
    setShowCostOfSales(!showCostOfSales);
  };

  const valueFormatter = (value) => `$ ${value} Thousands`;
  const primaryColor = theme.palette.primary.main;
  const warningColor = theme.palette.warning.main;

  const lables = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const data = [
    { data: [180, 90, 135, 114, 120, 145, 170, 200, 170, 230, 210, 180], label: 'Income', color: warningColor, valueFormatter },
    { data: [120, 45, 78, 150, 168, 99, 180, 220, 180, 210, 220, 200], label: 'Cost of Sales', color: primaryColor, valueFormatter }
  ];

  const axisFonstyle = { fontSize: 10, fill: theme.palette.text.secondary };

  return (
    <MainCard sx={{ mt: 1 }} content={false}>
      <Box sx={{ p: 2.5, pb: 0 }}>
        <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Net Profit
            </Typography>
            <Typography variant="h4">$1560</Typography>
          </Box>

          <FormGroup>
            <Stack direction="row">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={showIncome}
                    onChange={handleIncomeChange}
                    sx={{ '&.Mui-checked': { color: warningColor }, '&:hover': { backgroundColor: alpha(warningColor, 0.08) } }}
                  />
                }
                label="Income"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={showCostOfSales}
                    onChange={handleCostOfSalesChange}
                    sx={{ '&.Mui-checked': { color: primaryColor } }}
                  />
                }
                label="Cost of Sales"
              />
            </Stack>
          </FormGroup>
        </Stack>

        <BarChart
          height={380}
          grid={{ horizontal: true }}
          xAxis={[{ data: lables, scaleType: 'band', tickLabelStyle: { ...axisFonstyle, fontSize: 12 } }]}
          yAxis={[{ disableLine: true, disableTicks: true, tickMaxStep: 20, tickLabelStyle: axisFonstyle }]}
          series={data
            .filter((series) => (series.label === 'Income' && showIncome) || (series.label === 'Cost of Sales' && showCostOfSales))
            .map((series) => ({ ...series, type: 'bar' }))}
          slotProps={{ legend: { hidden: true }, bar: { rx: 5, ry: 5 } }}
          axisHighlight={{ x: 'none' }}
          margin={{ top: 30, left: 40, right: 10 }}
          tooltip={{ trigger: 'item' }}
          sx={{
            '& .MuiBarElement-root:hover': { opacity: 0.6 },
            '& .MuiChartsAxis-directionX .MuiChartsAxis-tick, & .MuiChartsAxis-root line': { stroke: theme.palette.divider }
          }}
        />
      </Box>
    </MainCard>
  );
}
