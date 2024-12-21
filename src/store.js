import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import tasksListReduser from "./features/tasksList/tasksListSlice";
import { watchFetchExamplesTasks } from "./features/tasksList/tasksSaga";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    tasksTable: tasksListReduser,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchExamplesTasks);

export default store;