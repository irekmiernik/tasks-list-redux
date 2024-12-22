import { takeEvery, call, put, takeLatest, select } from "redux-saga/effects";
import { fetchExamaplesTasks, setExamplesTasks, tasksStateTasksTable } from "./tasksListSlice";
import { getExamplesTasks } from "./getExamplesTasks";
import { saveAtLocalStorage } from "./tasksLocalStorage";

function* fetchExamaplesTasksHandler() {
  try {
    const examplesTasks = yield call(getExamplesTasks);
    yield put(setExamplesTasks(examplesTasks));
  }
  catch (error) {
    yield call(alert, "Niestety kod aplikacji jest niepoprawny!");
  }
};

function* saveAtLocalStorageHandler() {
  const tasksTable = yield select(tasksStateTasksTable);
  yield call(saveAtLocalStorage, tasksTable);
};

export function* tasksSaga() {
  yield takeLatest(fetchExamaplesTasks.type, fetchExamaplesTasksHandler);
  yield takeEvery("*", saveAtLocalStorageHandler);
};