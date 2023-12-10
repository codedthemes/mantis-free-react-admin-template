import './dashboard.scss';
import { useState } from 'react';
import { ColumnName, Task } from 'Types/Task';
import { SectionHeader } from 'components/cards/headers/SectionHeader';
import { RenderComponent } from 'utils/RenderComponent';
import { CaretRightOutlined, CheckCircleOutlined } from '@ant-design/icons';
// import AnalyticEcommerce from '@/components/cards/statistics/AnalyticEcommerce';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

export function DashboardDefault() {
  const initialTaskObj: Record<string, Task[]> = {
    new: [
      {
        id: '8',
        title: 'Get Khabib food and litter',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id arcu eget augue ullamcorper ultrices. Sed in nisl sed velit aliquet aliquam. Nulla facilisi. Nulla facilisi. Nullam eget eros vitae odio aliquet aliquam. Nulla facilisi. Donec quis ma',
        status: 'new'
      },
      {
        id: '145',
        title: 'Update dads pc to windows 11',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id arcu eget augue ullamcorper ultrices. Sed in nisl sed velit aliquet aliquam. Nulla facilisi. Nulla facilisi. Nullam eget eros vitae odio aliquet aliquam. Nulla facilisi. Donec quis ma',
        status: 'new'
      }
    ],
    committed: [
      {
        id: '22',
        title: 'Get clothes for christmas party',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id arcu eget augue ullamcorper ultrices. Sed in nisl sed velit aliquet aliquam. Nulla facilisi. Nulla facilisi. Nullam eget eros vitae odio aliquet aliquam. Nulla facilisi. Donec quis ma',
        status: 'committed'
      },
      {
        id: '73',
        title: 'pick up lunch',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id arcu eget augue ullamcorper ultrices. Sed in nisl sed velit aliquet aliquam. Nulla facilisi. Nulla facilisi. Nullam eget eros vitae odio aliquet aliquam. Nulla facilisi. Donec quis ma',
        status: 'committed'
      }
    ],
    active: [
      {
        id: '1',
        title: 'Clean my room',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id arcu eget augue ullamcorper ultrices. Sed in nisl sed velit aliquet aliquam. Nulla facilisi. Nulla facilisi. Nullam eget eros vitae odio aliquet aliquam. Nulla facilisi. Donec quis ma',
        status: 'active'
      },
      {
        id: '2',
        title: 'Take out the trash',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id arcu eget augue ullamcorper ultrices. Sed in nisl sed velit aliquet aliquam. Nulla facilisi. Nulla facilisi. Nullam eget eros vitae odio aliquet aliquam. Nulla facilisi. Donec quis ma',
        status: 'active'
      }
    ],

    resolved: [
      {
        id: '7',
        title: 'Workout',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id arcu eget augue ullamcorper ultrices. Sed in nisl sed velit aliquet aliquam. Nulla facilisi. Nulla facilisi. Nullam eget eros vitae odio aliquet aliquam. Nulla facilisi. Donec quis ma',
        status: 'resolved'
      },
      {
        id: '11',
        title: 'Dev 422 Homework',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id arcu eget augue ullamcorper ultrices. Sed in nisl sed velit aliquet aliquam. Nulla facilisi. Nulla facilisi. Nullam eget eros vitae odio aliquet aliquam. Nulla facilisi. Donec quis ma',
        status: 'resolved'
      }
    ]
  };

  const [taskObj, setTaskObj] = useState(initialTaskObj);

  const SetArray = (task: Task, newStatus: ColumnName) => {
    setTaskObj((prev) => {
      const updatedObj = { ...prev };
      const prevTasks = updatedObj[task.status];
      const newTasks = updatedObj[newStatus];

      // Filter out the task from the previous status
      updatedObj[task.status] = prevTasks.filter((t) => t.id !== task.id);

      // Add the task to the new status
      updatedObj[newStatus] = [...newTasks, { ...task, status: newStatus }];

      return updatedObj;
    });
  };

  const HandleOnDrop = (e: React.DragEvent, newStatus: ColumnName) => {
    const taskId = e.dataTransfer.getData('id');
    const taskStatus = e.dataTransfer.getData('status');

    const task = taskObj[taskStatus].find((t) => t.id === taskId);

    if (task && task.status !== newStatus) {
      SetArray(task, newStatus);
    }
  };

  const HandleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className="dashboard-container">
      <div
        className="dashboard-column"
        onDrop={(e: React.DragEvent) => {
          HandleOnDrop(e, ColumnName.NEW);
        }}
        onDragOver={HandleDragOver}
      >
        <SectionHeader title="New" icon={<CaretRightOutlined style={{ verticalAlign: '-0.3em', color: '#00A7FA' }} />} />
        <div className="droppable-column">{RenderComponent(taskObj.new)}</div>
      </div>
      <div className="dashboard-column">
        <SectionHeader title="Committed" icon={<CaretRightOutlined style={{ verticalAlign: '-0.3em', color: '#bc85fa' }} />} />
        <div
          className="droppable-column"
          onDrop={(e: React.DragEvent) => {
            HandleOnDrop(e, ColumnName.COMMITTED);
          }}
          onDragOver={HandleDragOver}
        >
          {/* <AnalyticEcommerce title="Total Users" count="78,250" percentage={70.5} extra="8,900" /> */}
          {RenderComponent(taskObj.committed)}
        </div>
      </div>
      <div className="dashboard-column">
        <SectionHeader title="Active" icon={<CaretRightOutlined style={{ verticalAlign: '-0.3em', color: '#F6A229' }} />} />
        <div
          className="droppable-column"
          onDrop={(e: React.DragEvent) => {
            HandleOnDrop(e, ColumnName.ACTIVE);
          }}
          onDragOver={HandleDragOver}
        >
          {RenderComponent(taskObj.active)}
          {/* <AnalyticEcommerce title="Total Order" count="18,800" percentage={27.4} isLoss color="warning" extra="1,943" /> */}
        </div>
      </div>
      <div className="dashboard-column">
        <SectionHeader title="Resolved" icon={<CheckCircleOutlined style={{ verticalAlign: '-0.3em', color: '#48EB12' }} />} />
        <div
          className="droppable-column"
          onDrop={(e: React.DragEvent) => {
            HandleOnDrop(e, ColumnName.RESOLVED);
          }}
          onDragOver={HandleDragOver}
        >
          {RenderComponent(taskObj.resolved)}
        </div>
      </div>
    </div>
  );
}

export default DashboardDefault;
