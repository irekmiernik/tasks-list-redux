import { useSelector } from 'react-redux';
import { tasksState } from './tasksListSlice';
import { Body } from '../../common/Body';
import { Header } from '../../common/Header';
import { Section } from '../../common/Section';
import { AddTask } from './AddTask';
import { TwoButtons } from './TwoButtons';
import { TasksList } from './TasksList';

export const Main = () => {
  localStorage.setItem("tasksTable", JSON.stringify(useSelector(tasksState).tasksTable));

  return (
    <Body>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<AddTask />} />
      <Section title="Lista zadań" twoButtons={<TwoButtons />} body={<TasksList />} />
    </Body>
  );
};