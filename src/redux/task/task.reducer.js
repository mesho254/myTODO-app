import { taskTypes } from './task.types';

const INITIAL_STATE = {
  taskItems: [],
};

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case taskTypes.ADD_TASK:
      return {
        ...state,
        taskItems: [...state.taskItems, action.payload],
      };
    case taskTypes.REMOVE_TASK:
      return {
        ...state,
        taskItems: state.taskItems.filter(
          (taskItem) => taskItem !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;
