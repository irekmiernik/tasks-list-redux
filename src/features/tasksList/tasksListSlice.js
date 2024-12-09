import { createSlice } from "@reduxjs/toolkit";

const tasksListSlice = createSlice({
  name: "tasksTable",
  initialState: {
    tasksTable: [],
  },
  reducers: {
    addTask: ({ tasksTable }, { payload }) => {
      tasksTable.push(payload);
    },
  },
});

export const { addTask } = tasksListSlice.actions;
export const selectTasks = state => state.tasksTable;
export default tasksListSlice.reducer;