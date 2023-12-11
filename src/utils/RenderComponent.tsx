import TaskCard from 'components/cards/task/task-card';
import { Task } from '../types/Task';
import { Epic } from 'types/Epic';
import { EpicCard } from 'components/cards/epic/epic-card';

export function RenderTaskComponent(data: Task[]): JSX.Element[] {
  const elementsToRender: JSX.Element[] = [];

  data.forEach((task, key) => {
    elementsToRender.push(<TaskCard id={task.id} title={task.title} status={task.status} points={task.points} />);
  });

  return elementsToRender;
}

export function RenderEpicComponent(data: Epic[]): JSX.Element[] {
  const elementsToRender: JSX.Element[] = [];

  data.forEach((epic, key) => {
    elementsToRender.push(<EpicCard id={epic.id} title={epic.title} status={epic.status} />);
  });

  return elementsToRender;
}
