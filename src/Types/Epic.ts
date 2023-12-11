export interface Epic extends CreateEpic {
  id: string;
}

export interface CreateEpic {
  title: string;
  userId: string;
}
