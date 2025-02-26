import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { alpha, useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { LineChart } from '@mui/x-charts/LineChart';

// Sample data
const monthlyLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const weeklyLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const monthlyData1 = [76, 85, 101, 98, 87, 105, 91, 114, 94, 86, 115, 35];
const weeklyData1 = [31, 40, 28, 51, 42, 109, 100];

const monthlyData2 = [110, 60, 150, 35, 60, 36, 26, 45, 65, 52, 53, 41];
const weeklyData2 = [11, 32, 45, 32, 34, 52, 41];

function Legend({ items, onToggle }) {
  return (
    <Stack direction="row" sx={{ gap: 2, alignItems: 'center', justifyContent: 'center', mt: 2.5, mb: 1.5 }}>
      {items.map((item) => (
        <Stack
          key={item.label}
          direction="row"
          sx={{ gap: 1.25, alignItems: 'center', cursor: 'pointer' }}
          onClick={() => onToggle(item.label)}
        >
          <Box sx={{ width: 12, height: 12, bgcolor: item.visible ? item.color : 'grey.500', borderRadius: '50%' }} />
          <Typography variant="body2" color="text.primary">
            {item.label}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}

// ==============================|| INCOME AREA CHART ||============================== //

export default function IncomeAreaChart({ view }) {
  const theme = useTheme();

  const [visibility, setVisibility] = useState({
    'Page views': true,
    Sessions: true
  });

  const labels = view === 'monthly' ? monthlyLabels : weeklyLabels;
  const data1 = view === 'monthly' ? monthlyData1 : weeklyData1;
  const data2 = view === 'monthly' ? monthlyData2 : weeklyData2;

  const line = theme.palette.divider;

  const toggleVisibility = (label) => {
    setVisibility((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const visibleSeries = [
    {
      data: data1,
      label: 'Page views',
      showMark: false,
      area: true,
      id: 'Germany',
      color: theme.palette.primary.main || '',
      visible: visibility['Page views']
    },
    {
      data: data2,
      label: 'Sessions',
      showMark: false,
      area: true,
      id: 'UK',
      color: theme.palette.primary[700] || '',
      visible: visibility['Sessions']
    }
  ];

  const axisFonstyle = { fontSize: 10, fill: theme.palette.text.secondary };

  return (
    <>
      <LineChart
        grid={{ horizontal: true }}
        xAxis={[{ scaleType: 'point', data: labels, disableLine: true, tickLabelStyle: axisFonstyle }]}
        yAxis={[{ disableLine: true, disableTicks: true, tickLabelStyle: axisFonstyle }]}
        height={450}
        margin={{ top: 40, bottom: 20, right: 20 }}
        series={visibleSeries
          .filter((series) => series.visible)
          .map((series) => ({
            type: 'line',
            data: series.data,
            label: series.label,
            showMark: series.showMark,
            area: series.area,
            id: series.id,
            color: series.color,
            stroke: series.color,
            strokeWidth: 2
          }))}
        slotProps={{ legend: { hidden: true } }}
        sx={{
          '& .MuiAreaElement-series-Germany': { fill: "url('#myGradient1')", strokeWidth: 2, opacity: 0.8 },
          '& .MuiAreaElement-series-UK': { fill: "url('#myGradient2')", strokeWidth: 2, opacity: 0.8 },
          '& .MuiChartsAxis-directionX .MuiChartsAxis-tick': { stroke: line }
        }}
      >
        <defs>
          <linearGradient id="myGradient1" gradientTransform="rotate(90)">
            <stop offset="10%" stopColor={alpha(theme.palette.primary.main, 0.4)} />
            <stop offset="90%" stopColor={alpha(theme.palette.background.default, 0.4)} />
          </linearGradient>
          <linearGradient id="myGradient2" gradientTransform="rotate(90)">
            <stop offset="10%" stopColor={alpha(theme.palette.primary[700], 0.4)} />
            <stop offset="90%" stopColor={alpha(theme.palette.background.default, 0.4)} />
          </linearGradient>
        </defs>
      </LineChart>
      <Legend items={visibleSeries} onToggle={toggleVisibility} />
    </>
  );
}

Legend.propTypes = { items: PropTypes.array, onToggle: PropTypes.func };

IncomeAreaChart.propTypes = { view: PropTypes.oneOf(['monthly', 'weekly']) };
