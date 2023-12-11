import { create } from 'zustand';
import { CreateId } from 'utils/CreateId';
import { Epic, CreateEpic, EpicStatus } from 'types/Epic';
interface EpicStore {
  Epics: Epic[];
  AddEpic: (epic: CreateEpic) => void;
}
export const useEpicStore = create<EpicStore>((set) => ({
  Epics: [
    {
      id: '1',
      title: 'Run a 10k',
      userId: '1',
      status: EpicStatus.IN_PROGRESS
    }
  ],

  AddEpic: (epic: CreateEpic) => {
    set((state) => {
      const newEpic = {
        id: CreateId('epic'),
        ...epic
      };
      const updatedEpics = [...state.Epics];
      updatedEpics.push(newEpic);
      return { Epics: updatedEpics };
    });
  }
}));
