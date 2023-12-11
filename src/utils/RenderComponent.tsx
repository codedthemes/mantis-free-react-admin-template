import AnalyticEcommerce from 'components/cards/statistics/TaskCard';
import { Task } from '../types/Task';

export function RenderComponent(data: Task[]): JSX.Element[] {
  const elementsToRender: JSX.Element[] = [];

  data.forEach((task, key) => {
    elementsToRender.push(<AnalyticEcommerce id={task.id} title={task.title} status={task.status} points={task.points} />);
  });

  return elementsToRender;
}
