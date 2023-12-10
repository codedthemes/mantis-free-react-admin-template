import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import { Task } from '../Types/Task';

export function RenderComponent(data: Task[]): JSX.Element[] {
  const elementsToRender: JSX.Element[] = [];

  data.forEach((task, key) => {
    elementsToRender.push(<AnalyticEcommerce title={task.title} count={task.id} extra={task.status} />);
  });

  return elementsToRender;
}
