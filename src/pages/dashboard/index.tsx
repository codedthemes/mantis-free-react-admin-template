import './dashboard.scss';

import AnalyticEcommerce from '../../components/cards/statistics/AnalyticEcommerce';
import { SectionHeader } from 'components/cards/headers/SectionHeader';
import { RenderComponent } from 'utils/RenderComponent';
import { MockTasks } from 'utils/RenderComponent';

// import AnalyticEcommerce from '@/components/cards/statistics/AnalyticEcommerce';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

export function DashboardDefault() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-column">
        <SectionHeader title="New" />
        {RenderComponent(MockTasks)}
      </div>
      <div className="dashboard-column">
        <SectionHeader title="Committed" />
        <AnalyticEcommerce title="Total Users" count="78,250" percentage={70.5} extra="8,900" />
        {RenderComponent(MockTasks)}
      </div>
      <div className="dashboard-column">
        <SectionHeader title="Active" />
        {RenderComponent(MockTasks)}
        <AnalyticEcommerce title="Total Order" count="18,800" percentage={27.4} isLoss color="warning" extra="1,943" />
      </div>
      <div className="dashboard-column">
        <SectionHeader title="Resolved" />
        {RenderComponent(MockTasks)}
      </div>
    </div>
  );
}

export default DashboardDefault;
