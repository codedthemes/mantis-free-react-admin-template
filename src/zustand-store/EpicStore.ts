import { create } from 'zustand';
import { Task, ColumnName, CreateTask } from 'types/Task';
import { v4 as uuidv4 } from 'uuid';
import { CreateId } from 'utils/CreateId';
import { Epic, CreateEpic } from 'types/Epic';
interface EpicStore {
  Epics: Epic[];
  // Define your actions here if needed
  // TransferTask: () => void;
  // addTask: (task: Task) => void;
  //   UpdateTasks: (epic: Epic) => void;
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
