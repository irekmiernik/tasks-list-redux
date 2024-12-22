export const saveAtLocalStorage = tasksTable =>
  localStorage.setItem("tasksTable", JSON.stringify(tasksTable));

export const getFromLocalStorage = () =>
  JSON.parse(localStorage.getItem("tasksTable")) || [];