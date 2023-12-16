import { CreateEpicPayload, Epic } from 'Types/Epic';

export interface IEpicApi {
  createEpic(payload: CreateEpicPayload): Promise<Epic>;
  getEpicbyId(id: string): Promise<Epic>;
  getAllEpics(user_id: string): Promise<Epic[]>;
  updateEpic(id: string, payload: Epic): Promise<Epic>;
  deleteEpic(id: string): Promise<void>;
}
