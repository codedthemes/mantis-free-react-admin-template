// material-ui
import { Typography } from '@mui/material';
import { SectionHeader } from 'components/cards/headers/SectionHeader';
// project import
import MainCard from 'components/MainCard';
import { epicDescription } from 'pages/dashboard/create-task/CreateTask';
import { RenderEpicComponent } from 'utils/RenderComponent';
import { useEpicStore } from 'zustand-store/EpicStore';

const EpicsPage = () => {
  const { Epics } = useEpicStore();

  return (
    <MainCard title="Epics">
      <div className="epic-container">
        <Typography variant="h4" color="secondary">
          {/* {epicDescription} */}
        </Typography>
        <div className="dashboard-container">
          <div className="dashboard-column">
            <SectionHeader title={epicDescription} />
            <div className="droppable-column">{RenderEpicComponent(Epics)}</div>
          </div>
        </div>
        <div className="epics-list"></div>
      </div>
    </MainCard>
  );
};

export default EpicsPage;
