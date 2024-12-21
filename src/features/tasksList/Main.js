import { useSelector } from 'react-redux';
import { tasksState } from './tasksListSlice';
import { Header } from '../../common/Header';
import { Section } from '../../common/Section';
import { AddTask } from './AddTask';
import { OneButton } from './OneButton';
import { TwoButtons } from './TwoButtons';
import { TasksList } from './TasksList';

export const Main = () => {
  localStorage.setItem("tasksTable", JSON.stringify(useSelector(tasksState).tasksTable));

  return (
    <main>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" oneButton={<OneButton />} body={<AddTask />} />
      <Section title="Lista zadań" twoButtons={<TwoButtons />} body={<TasksList />} />
    </main>
  );
};