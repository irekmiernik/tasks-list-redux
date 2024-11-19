import { useState, useEffect } from 'react';

export const useTasks = () => {
  const [tasksTable, setTasksTable] = useState(JSON.parse(localStorage.getItem("tasksTable")) || []);

  useEffect(() => localStorage.setItem("tasksTable", JSON.stringify(tasksTable)));

  const addTask = (taskName) => {
    setTasksTable(tasksTable => [...tasksTable, { id: tasksTable.length, content: taskName, done: false, }]);
  };

  const setAllTasksDone = () => {
    setTasksTable(tasksTable => tasksTable.map((task) => ({ ...task, done: true, })));
  };

  const setTaskDone = (id) => {
    setTasksTable(tasksTable => tasksTable.map((task) => {
      if (task.id === id) return { ...task, done: !task.done }; else return task;
    }));
  };

  const removeTask = (id) => {
    setTasksTable(tasksTable => tasksTable.filter(task => task.id !== id));
    setTasksTable(tasksTable => tasksTable.map((task, index) => ({ ...task, id: index })));
  };

  const [hideTasks, setHideTasks] = useState(false);
  const toggleHideTasks = () => setHideTasks(hideTasks => !hideTasks);

  return {
    tasksTable,
    addTask,
    setAllTasksDone,
    setTaskDone,
    removeTask,
    hideTasks,
    toggleHideTasks,
  };
};