import { createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage } from "./tasksLocalStorage";

const tasksListSlice = createSlice({
  name: "tasksList",
  initialState: {
    tasksTable: getFromLocalStorage(),
    hideDone: false,
    loading: false,
  },
  reducers: {
    addTask: ({ tasksTable }, { payload: task }) => {
      tasksTable.push(task);
    },
    toggleHideDone: state => {
      state.hideDone = !state.hideDone;
    },
    setAllTasksDone: state => {
      state.tasksTable = state.tasksTable.map((task) => ({ ...task, done: true, }));
    },
    setTaskDone: (state, { payload: id }) => {
      state.tasksTable = state.tasksTable.map((task) => {
        if (task.id === id) return { ...task, done: !task.done }; else return task;
      });
    },
    removeTask: (state, { payload: id }) => {
      state.tasksTable = state.tasksTable.filter(task => task.id !== id);
    },
    fetchExamapleTasks: state => {
      state.loading = true;
    },
    fetchExamapleTasksSuccess: (state, { payload: exampleTasks }) => {
      state.tasksTable = exampleTasks;
      state.loading = false;
    },
    fetchExamapleTasksError: state => {
      state.loading = false;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  setAllTasksDone,
  setTaskDone,
  removeTask,
  fetchExamapleTasks,
  fetchExamapleTasksSuccess,
  fetchExamapleTasksError,
} = tasksListSlice.actions;

export const selectState = state => state.tasksTable;
export const selectTasksTable = state => selectState(state).tasksTable;
export const selectHideDone = state => selectState(state).hideDone;
export const selectLoading = state => selectState(state).loading;
export const selectEmptyTasksTable = state => selectTasksTable(state).length === 0;
export const selectEveryDone = state => selectTasksTable(state).every(({ done }) => done);
export const selectNooneDone = state => selectTasksTable(state).every(({ done }) => !done);
export const selectTaskById = (state, taskId) =>
  selectTasksTable(state).find(({ id }) => id === taskId);
export const selectTasksByQuery = (state, query) => {
  const tasks = selectTasksTable(state);
  if (!query || query.trim() === "") return tasks;
  return tasks.filter(({ content }) => content.toUpperCase().includes(query.trim().toUpperCase()));
};

export default tasksListSlice.reducer;