import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { axisClasses, barClasses, BarChart, chartsGridClasses } from '@mui/x-charts';

// project imports
import MainCard from 'components/MainCard';
import { withAlpha } from 'utils/colorUtils';

// ==============================|| SALES COLUMN CHART ||============================== //

export default function SalesChart({ filter = 'today' }) {
  const theme = useTheme();
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [seriesVisibility, setSeriesVisibility] = useState({ Income: true, 'Cost of Sales': true });
  const [highlightedItem, setHighlightedItem] = useState({ seriesId: 'Income' });

  const toggleSeriesVisibility = (seriesId, seriesLabel) => {
    setSeriesVisibility((prev) => {
      const isNowHidden = prev[seriesLabel];
      if (isNowHidden && highlightedItem?.seriesId === seriesId) {
        setHighlightedItem(null);
      }
      return { ...prev, [seriesLabel]: !prev[seriesLabel] };
    });
  };

  const handleHighLightedSeries = (newHighLightedSeries) => {
    if (newHighLightedSeries !== null) {
      setHighlightedItem((prev) => ({
        ...prev,
        seriesId: newHighLightedSeries
      }));
    }
  };

  const valueFormatter = (value) => `$ ${value} Thousands`;
  const primaryColor = theme.vars.palette.primary.main;
  const primaryLightColor = theme.vars.palette.primary.lighter;
  const warningColor = theme.vars.palette.warning.main;
  const warningLightColor = theme.vars.palette.warning.lighter;

  // ==============================|| MEMOIZED CHART DATA ||============================== //

  const chartData = useMemo(() => {
    let labels = [];
    let incomeData = [];
    let income2Data = [];
    let cosData = [];
    let cos2Data = [];

    switch (filter) {
      case 'month':
        labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
        incomeData = [400, 300, 500, 450];
        income2Data = [50, 80, 60, 90];
        cosData = [200, 150, 250, 200];
        cos2Data = [100, 120, 90, 110];
        break;
      case 'year':
        labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        incomeData = [120, 150, 180, 160, 200, 220, 250, 230, 210, 260, 280, 300];
        income2Data = [30, 40, 50, 45, 60, 70, 80, 75, 65, 85, 95, 100];
        cosData = [80, 100, 120, 110, 140, 150, 170, 160, 150, 180, 190, 200];
        cos2Data = [40, 50, 60, 55, 70, 80, 90, 85, 75, 95, 105, 110];
        break;
      case 'today':
      default:
        labels = ['07.06', '08.06', '09.06', '10.06', '11.06', '12.06', '13.06'];
        incomeData = [180, 90, 135, 114, 120, 200, 145];
        income2Data = [20, 110, 65, 86, 80, 0, 55];
        cosData = [120, 45, 78, 150, 168, 145, 99];
        cos2Data = [80, 155, 122, 50, 32, 55, 101];
        break;
    }
    return { labels, incomeData, income2Data, cosData, cos2Data };
  }, [filter]);

  const { labels, incomeData, income2Data, cosData, cos2Data } = chartData;

  const initialSeries = [
    { id: 'Income', data: incomeData, stack: 'income', label: 'Income', color: warningColor, valueFormatter },
    { id: 'Income2', data: income2Data, stack: 'income', label: 'Income', color: warningLightColor, valueFormatter },
    { id: 'CostOfSales', data: cosData, stack: 'cos', label: 'Cost of Sales', color: primaryColor, valueFormatter },
    { id: 'CostOfSales2', data: cos2Data, stack: 'cos', label: 'Cost of Sales', color: primaryLightColor, valueFormatter }
  ];

  const initialSeriesCopy = [...initialSeries.slice(0, 1), ...initialSeries.slice(2, 3)];

  return (
    <MainCard sx={{ mt: 1 }} content={false}>
      <Box sx={{ p: 2.5, pb: 0 }}>
        <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              Net Profit
            </Typography>
            <Typography variant="h4">$1560</Typography>
          </Box>

          <Stack direction="row" sx={{ gap: 3 }}>
            {initialSeriesCopy.map((series) => (
              <Stack
                key={series.label}
                direction="row"
                onClick={() => toggleSeriesVisibility(series.id, series.label)}
                onMouseEnter={() => handleHighLightedSeries(series.id)}
                onMouseLeave={() => setHighlightedItem(null)}
                sx={{
                  gap: 1,
                  alignItems: 'center',
                  opacity: seriesVisibility[series.label] ? 1 : 0.45,
                  cursor: 'pointer',
                  transition: 'opacity 0.2s ease-in-out'
                }}
              >
                <Box sx={{ height: 10, width: 10, borderRadius: '50%', backgroundColor: series.color }} />
                <Typography>{series.label}</Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>

        <BarChart
          hideLegend
          height={380}
          grid={{ horizontal: true }}
          xAxis={[
            {
              id: 'sales-x-axis',
              data: labels,
              tickSize: 7,
              disableLine: true,
              categoryGapRatio: downSM ? 0.5 : 0.7,
              barGapRatio: downSM ? 0.4 : 0.7
            }
          ]}
          yAxis={[{ disableLine: true, tickSize: 7, tickMaxStep: 50 }]}
          series={initialSeries
            .map((series) => ({ ...series, type: 'bar', color: withAlpha(series.color, 0.85), visible: seriesVisibility[series.label] }))
            .filter((series) => series.visible)}
          highlightedItem={highlightedItem}
          slotProps={{ bar: { rx: 4, ry: 4 }, tooltip: { trigger: 'item' } }}
          axisHighlight={{ x: 'none' }}
          margin={{ top: 30, left: -5, bottom: 25, right: 10 }}
          sx={{
            [`& .${barClasses.element}:hover`]: { opacity: 0.6 },
            [`& .${chartsGridClasses.line}`]: { strokeDasharray: '4 4', stroke: theme.vars.palette.divider },
            '& .MuiBarElement-series-auto-generated-id-0, & .MuiBarElement-series-auto-generated-id-1': { width: 15 },
            [`& .${axisClasses.root}.${axisClasses.directionX} .${axisClasses.tick}`]: { stroke: 'transparent' },
            [`& .${axisClasses.root}.${axisClasses.directionY} .${axisClasses.tick}`]: { stroke: 'transparent' }
          }}
        />
      </Box>
    </MainCard>
  );
}

SalesChart.propTypes = { filter: PropTypes.any };
