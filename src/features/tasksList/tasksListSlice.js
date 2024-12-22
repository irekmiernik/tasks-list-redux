import { createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage } from "./tasksLocalStorage";

const tasksListSlice = createSlice({
  name: "tasksList",
  initialState: {
    tasksTable: getFromLocalStorage(),
    hideTasks: false,
  },
  reducers: {
    addTask: ({ tasksTable }, { payload: task }) => {
      tasksTable.push(task);
    },
    toggleHideTasks: state => {
      state.hideTasks = !state.hideTasks;
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
    fetchExamaplesTasks: () => { },

    setExamplesTasks: (state, { payload: examplesTasks }) => {
      state.tasksTable = examplesTasks;
    },
  },
});

export const {
  addTask,
  toggleHideTasks,
  setAllTasksDone,
  setTaskDone,
  removeTask,
  fetchExamaplesTasks,
  setExamplesTasks,
} = tasksListSlice.actions;
export const tasksState = state => state.tasksTable;
export const tasksStateTasksTable = state => tasksState(state).tasksTable;

export default tasksListSlice.reducer;