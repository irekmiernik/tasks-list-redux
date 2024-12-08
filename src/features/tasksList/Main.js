import { useTasks } from '../../useTasks';
import { Body } from '../../common/Body';
import { Header } from '../../common/Header';
import { Section } from '../../common/Section';
import { Form } from './Form';
import { TwoButtons } from './TwoButtons';
import { TasksList } from './TasksList';
export let taskSet = null;

export const Main = () => {
  taskSet = useTasks();
  return (
    <Body>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section title="Lista zadań" twoButtons={<TwoButtons />} body={<TasksList />} />
    </Body>
  );
};