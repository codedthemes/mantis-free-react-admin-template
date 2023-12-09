import './dashboard.scss';

import { Typography } from '@mui/material';

import AnalyticEcommerce from '../../components/cards/statistics/AnalyticEcommerce';

// import AnalyticEcommerce from '@/components/cards/statistics/AnalyticEcommerce';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

export function DashboardDefault() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-column">
        <Typography className="dashboard-column-header" variant="h5">
          New
        </Typography>
        <AnalyticEcommerce title="Total Page Views" count="4,42,236" percentage={59.3} extra="35,000" />
        <AnalyticEcommerce title="Total Page Views" count="4,42,236" percentage={59.3} extra="35,000" />
        <AnalyticEcommerce title="Total Page Views" count="4,42,236" percentage={59.3} extra="35,000" />
        <AnalyticEcommerce title="Total Page Views" count="4,42,236" percentage={59.3} extra="35,000" />
        <AnalyticEcommerce title="Total Page Views" count="4,42,236" percentage={59.3} extra="35,000" />
        <AnalyticEcommerce title="Total Page Views" count="4,42,236" percentage={59.3} extra="35,000" />
        <AnalyticEcommerce title="Total Page Views" count="4,42,236" percentage={59.3} extra="35,000" />
        <AnalyticEcommerce title="Total Page Views" count="4,42,236" percentage={59.3} extra="35,000" />
      </div>
      <div className="dashboard-column">
        <Typography variant="h5" className="dashboard-column-header">
          Active
        </Typography>
        <AnalyticEcommerce title="Total Users" count="78,250" percentage={70.5} extra="8,900" />
      </div>
      <div className="dashboard-column">
        <Typography variant="h5" className="dashboard-column-header">
          Resolved
        </Typography>
        <AnalyticEcommerce title="Total Order" count="18,800" percentage={27.4} isLoss color="warning" extra="1,943" />
      </div>
      <div className="dashboard-column">
        <Typography variant="h5" className="dashboard-column-header">
          Closed
        </Typography>
        <AnalyticEcommerce title="Total Sales" count="$35,078" percentage={27.4} isLoss color="warning" extra="$20,395" />
      </div>
    </div>
  );
}

export default DashboardDefault;
