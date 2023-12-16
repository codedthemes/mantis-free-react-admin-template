export interface Epic extends CreateEpicPayload {
  id: string;
}

export interface CreateEpicPayload {
  title: string;
  user_id: string;
  status: EpicStatus;
}

export enum EpicStatus {
  IN_PROGRESS = 'active',
  Complete = 'success'
}
