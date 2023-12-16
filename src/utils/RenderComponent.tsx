import TaskCard from 'components/cards/task/task-card';
import { Task } from '../Types/Task';
import { Epic } from 'Types/Epic';
import { EpicCard } from 'components/cards/epic/epic-card';

export function RenderTaskComponent(data: Task[]): JSX.Element[] {
  const elementsToRender: JSX.Element[] = [];

  data.forEach((task, key) => {
    elementsToRender.push(<TaskCard key={key} id={task.id} title={task.title} status={task.status} points={task.points} />);
  });

  return elementsToRender;
}

export function RenderEpicComponent(data: Epic[]): JSX.Element[] {
  const elementsToRender: JSX.Element[] = [];

  data.forEach((epicData, key) => {
    elementsToRender.push(<EpicCard key={key} epic={epicData} />);
  });

  return elementsToRender;
}
