import { useTasks } from '../../useTasks';
import { Body } from '../../common/Body';
import { Header } from '../../common/Header';
import { Section } from '../../common/Section';
import { AddTask } from './AddTask';
import { TwoButtons } from './TwoButtons';
import { TasksList } from './TasksList';
export let taskSet = null;

export const Main = () => {
  taskSet = useTasks();
  return (
    <Body>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<AddTask />} />
      <Section title="Lista zadań" twoButtons={<TwoButtons />} body={<TasksList />} />
    </Body>
  );
};