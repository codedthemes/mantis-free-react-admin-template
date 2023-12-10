export type Task = {
  id: string;
  title: string;
  description: string;
  status: string;
};

export enum ColumnName {
  NEW = 'new',
  COMMITTED = 'committed',
  ACTIVE = 'active',
  RESOLVED = 'resolved'
}
