import axios, { AxiosInstance } from 'axios';
import { IEpicApi } from '../def/IEpicApi';
import { CreateEpicPayload, Epic } from 'Types/Epic';

export class EpicApi implements IEpicApi {
  private readonly query: AxiosInstance;
  constructor() {
    this.query = axios.create({
      baseURL: 'http://localhost:4000'
    });
  }

  async createEpic(payload: CreateEpicPayload): Promise<Epic> {
    return await this.query.post('/epics', payload);
  }
  async getEpicbyId(id: string): Promise<Epic> {
    throw new Error('Method not implemented.');
  }
  async getAllEpics(user_id: string): Promise<Epic[]> {
    const result = await (await this.query.get(`/epics/${user_id}`)).data;
    return result.data;
  }
  async updateEpic(id: string, payload: Epic): Promise<Epic> {
    throw new Error('Method not implemented.');
  }
  deleteEpic(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
