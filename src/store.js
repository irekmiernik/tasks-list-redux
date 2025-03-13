import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { tasksSaga } from "./features/tasksList/tasksSaga";
import tasksListReduser from "./features/tasksList/tasksListSlice";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { tasksList: tasksListReduser, },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(tasksSaga);

export default store;