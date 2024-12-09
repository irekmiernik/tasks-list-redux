import { configureStore } from "@reduxjs/toolkit";
import tasksTableReduser from "./features/tasksList/tasksListSlice";

export default configureStore({
  reducer: {
    tasksTableReduser,
  },
});
