import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import { Task } from '../Types/Task';

export function RenderComponent(data: Task[]): JSX.Element[] {
  const elementsToRender: JSX.Element[] = [];

  data.forEach((task, key) => {
    elementsToRender.push(<AnalyticEcommerce percentage={10} id={task.id} title={task.title} status={task.status} extra={task.status} />);
  });

  return elementsToRender;
}
