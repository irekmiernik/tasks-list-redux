import { takeEvery, call, put } from "redux-saga/effects";
import { fetchExamaplesTasks, setExamplesTasks } from "./tasksListSlice";
import { getExamplesTasks } from "./getExamplesTasks";

function* fetchExamaplesTasksHandler() {
  try {
    const examplesTasks = yield call(getExamplesTasks);
    yield put(setExamplesTasks(examplesTasks));
  }
  catch (error) {
    yield call(alert, "Niestety kod aplikacji jest niepoprawny!");
  }
};

export function* watchFetchExamplesTasks() {
  yield takeEvery(fetchExamaplesTasks.type, fetchExamaplesTasksHandler);
};