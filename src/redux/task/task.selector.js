const { createSelector } = require("reselect");

export const tasksSelector = state => state.tasks

export const taskSelector = createSelector(
    [tasksSelector],
    tasks => tasks.taskItems
)