export interface Epic extends CreateEpic {
  id: string;
}

export interface CreateEpic {
  title: string;
  userId: string;
  status: EpicStatus;
}

export enum EpicStatus {
  IN_PROGRESS = 'active',
  Complete = 'success'
}
