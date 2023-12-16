import { CreateTask } from '../pages/dashboard/create-task/CreateTask';

export interface Task extends CreateTask {
  id: string;
}

export interface CreateTask {
  title: string;
  points: number;
  status: string;
  epicId?: string;
}

export enum ColumnName {
  NEW = 'new',
  COMMITTED = 'committed',
  ACTIVE = 'active',
  RESOLVED = 'resolved'
}
