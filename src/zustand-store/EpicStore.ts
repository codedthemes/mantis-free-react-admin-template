import { create } from 'zustand';
import { CreateId } from 'utils/CreateId';
import { Epic, CreateEpic } from 'types/Epic';
interface EpicStore {
  Epics: Epic[];
  AddEpic: (epic: CreateEpic) => void;
}
export const useEpicStore = create<EpicStore>((set) => ({
  Epics: [],

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
