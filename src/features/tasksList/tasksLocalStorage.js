const localStorageKey = "tasksTable";

export const saveAtLocalStorage = tasksTable =>
  localStorage.setItem(localStorageKey, JSON.stringify(tasksTable));

export const getFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey)) || [];