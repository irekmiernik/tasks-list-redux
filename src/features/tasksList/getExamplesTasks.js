export const getExamplesTasks = async () => {
  const response = await fetch("/tasks-list-redux/examplesTasks.json");
  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();

};