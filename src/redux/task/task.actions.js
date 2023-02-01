import { taskTypes } from './task.types';
export const addTask = (taskItem) => ({
  type: taskTypes.ADD_TASK,
  payload: taskItem,
});

export const removeTask = (taskitem) => ({
  type: taskTypes.REMOVE_TASK,
  payload: taskitem,
});
