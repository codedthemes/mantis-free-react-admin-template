import { create } from 'zustand';
import { Task, ColumnName, CreateTask } from '../Types/Task';
import { CreateId } from 'utils/CreateId';
interface TaskStore {
  Tasks: Record<string, Task[]>;
  // Define your actions here if needed
  // TransferTask: () => void;
  // addTask: (task: Task) => void;
  UpdateTasks: (task: Task, newStatus: ColumnName) => void;
  AddTask: (task: CreateTask) => void;
}
export const useTaskStore = create<TaskStore>((set) => ({
  Tasks: {
    new: [
      {
        id: '8',
        title: 'Get Khabib food and litter',
        points: 2,
        status: 'new',
        epic_id: '1'
      },
      {
        id: '145',
        title: 'Update dads pc to windows 11',
        points: 7,
        status: 'new',
        epic_id: '1'
      }
    ],
    committed: [
      {
        id: '22',
        title: 'Get clothes for christmas party',
        points: 3,
        status: 'committed',
        epic_id: '1'
      },
      {
        id: '73',
        title: 'pick up lunch',
        points: 1,
        status: 'committed',
        epic_id: '1'
      }
    ],
    active: [
      {
        id: '1',
        title: 'Clean my room',
        points: 2,
        status: 'active',
        epic_id: '1'
      },
      {
        id: '2',
        title: 'Take out the trash',
        points: 1,
        status: 'active',
        epic_id: '1'
      }
    ],

    resolved: [
      {
        id: '7',
        title: 'Workout',
        points: 1,
        status: 'resolved',
        epic_id: '1'
      },
      {
        id: '11',
        title: 'Dev 422 Homework',
        points: 2,
        status: 'resolved',
        epic_id: '1'
      }
    ]
  },
  UpdateTasks: (task, newStatus) => {
    set((state) => {
      const updatedTasks = { ...state.Tasks };
      const prevTasks = updatedTasks[task.status];
      const newTasks = updatedTasks[newStatus];

      // Filter out the task from the previous status
      updatedTasks[task.status] = prevTasks.filter((t) => t.id !== task.id);

      // Add the task to the new status
      updatedTasks[newStatus] = [...newTasks, { ...task, status: newStatus }];

      return { Tasks: updatedTasks };
    });
  },
  AddTask: (task) => {
    set((state) => {
      const newTask: Task = {
        id: CreateId('task'),
        ...task
      };
      const updatedTasks = { ...state.Tasks };
      const newTasks = updatedTasks[task.status];
      updatedTasks[newTask.status] = [...newTasks, { ...newTask }];
      return { Tasks: updatedTasks };
    });
  }
}));
