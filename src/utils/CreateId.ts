import { v4 as uuidv4 } from 'uuid';
export const CreateId = (prefix: string) => {
  return `${prefix}_${uuidv4()}`;
};
