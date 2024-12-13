import { createSlice } from "@reduxjs/toolkit";

const tasksListSlice = createSlice({
  name: "tasksList",
  initialState: {
    tasksTable: JSON.parse(localStorage.getItem("tasksTable")) || [],
    hideTasks: false,
  },
  reducers: {
    addTask: ({ tasksTable }, { payload }) => {
      tasksTable.push(payload);
    },
    toggleHideTasks: state => {
      state.hideTasks = !state.hideTasks;
    },
    setAllTasksDone: state => {
      state.tasksTable = state.tasksTable.map((task) => ({ ...task, done: true, }));
    },
    setTaskDone: (state, { payload }) => {
      state.tasksTable = state.tasksTable.map((task) => {
        if (task.id === payload) return { ...task, done: !task.done }; else return task;
      });
    },
    removeTask: (state, { payload }) => {
      state.tasksTable = state.tasksTable.filter(task => task.id !== payload);
    },
  },
});

export const { addTask, toggleHideTasks, setAllTasksDone,
  setTaskDone, removeTask } = tasksListSlice.actions;
export const tasksState = state => state.tasksTable;
export default tasksListSlice.reducer;