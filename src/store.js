import { configureStore } from "@reduxjs/toolkit";
import tasksListReduser from "./features/tasksList/tasksListSlice";

export default configureStore({
  reducer: {
    tasksTable: tasksListReduser,
  },
});