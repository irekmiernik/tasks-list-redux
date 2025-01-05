import { takeEvery, call, put, takeLatest, select, delay } from "redux-saga/effects";
import { fetchExamapleTasks, setExampleTasks, selectTasksTable } from "./tasksListSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveAtLocalStorage } from "./tasksLocalStorage";

function* fetchExamapleTasksHandler() {
  try {
    yield delay(2000);
    const examplesTasks = yield call(getExampleTasks);
    yield put(setExampleTasks(examplesTasks));
  }
  catch (error) {
    yield call(alert, "Niestety kod aplikacji jest niepoprawny!");
  }
};

function* saveAtLocalStorageHandler() {
  const tasksTable = yield select(selectTasksTable);
  yield call(saveAtLocalStorage, tasksTable);
};

export function* tasksSaga() {
  yield takeLatest(fetchExamapleTasks.type, fetchExamapleTasksHandler);
  yield takeEvery("*", saveAtLocalStorageHandler);
};