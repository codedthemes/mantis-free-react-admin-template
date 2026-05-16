// material-ui
import { useTheme } from '@mui/material/styles';

import { chartsGridClasses, LineChart } from '@mui/x-charts';

const data = [58, 115, 28, 83, 63, 75, 35];
const labels = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// ==============================|| REPORT AREA CHART ||============================== //

export default function ReportAreaChart() {
  const theme = useTheme();

  return (
    <LineChart
      hideLegend
      grid={{ horizontal: true }}
      xAxis={[{ data: labels, scaleType: 'point', disableLine: true, tickSize: 7 }]}
      yAxis={[{ tickMaxStep: 20, position: 'none' }]}
      series={[{ data, showMark: false, id: 'ReportAreaChart', color: theme.vars.palette.warning.main, label: 'Series 1' }]}
      height={340}
      margin={{ top: 30, bottom: 25, left: 20, right: 20 }}
      sx={{
        '& .MuiLineElement-root': { strokeWidth: 1 },
        [`& .${chartsGridClasses.line}`]: { strokeDasharray: '4 4' },
        '& .MuiChartsAxis-root.MuiChartsAxis-directionX .MuiChartsAxis-tick': { stroke: 'transparent' }
      }}
    />
  );
}
