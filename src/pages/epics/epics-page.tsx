// material-ui
import './epics-page.scss';
import { SectionHeader } from 'components/cards/headers/SectionHeader';
import { CreateEpicButton } from './create-epic-button';
import MainCard from 'components/MainCard';
import { epicDescription } from 'pages/dashboard/create-task/CreateTask';
import { RenderEpicComponent } from 'utils/RenderComponent';
import { useEpicStore } from 'zustand-store/EpicStore';
import { useEffect } from 'react';

const EpicsPage = () => {
  const { Epics, fetchEpics } = useEpicStore();

  useEffect(() => {
    fetchEpics('1');
  }, [fetchEpics]);

  useEffect(() => {
    const unsubscribe = useEpicStore.subscribe((updatedEpics) => {
      // Handle the state change here, e.g., update component state
      console.log('Epics updated:', updatedEpics);
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <MainCard title="Epics">
      <div className="epic-container">
        <div className="dashboard-container">
          <div className="dashboard-column">
            <SectionHeader title={epicDescription} />
            <div className="epics-list">
              <CreateEpicButton />
              {RenderEpicComponent(Epics)}
            </div>
          </div>
        </div>
        <div className="epics-list"></div>
      </div>
    </MainCard>
  );
};

export default EpicsPage;
