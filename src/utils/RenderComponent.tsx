/**
 * RenderComponent
 * @description Render a component
 * @param {string} component
 * @param {object} props
 * @returns {JSX.Element}
 */

import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';

export const MockTasks: Task[] = [
  {
    id: '1',
    title: 'Clean my room',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id arcu eget augue ullamcorper ultrices. Sed in nisl sed velit aliquet aliquam. Nulla facilisi. Nulla facilisi. Nullam eget eros vitae odio aliquet aliquam. Nulla facilisi. Donec quis ma',
    status: 'new'
  },
  {
    id: '2',
    title: 'Take out the trash',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id arcu eget augue ullamcorper ultrices. Sed in nisl sed velit aliquet aliquam. Nulla facilisi. Nulla facilisi. Nullam eget eros vitae odio aliquet aliquam. Nulla facilisi. Donec quis ma',
    status: 'new'
  }
];

export function RenderComponent(data: Task[]): JSX.Element[] {
  const elementsToRender: JSX.Element[] = [];

  data.forEach((task) => {
    {
      elementsToRender.push(<AnalyticEcommerce title={task.title} count={task.id} extra={task.status} />);
    }
  });

  return elementsToRender;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
}
