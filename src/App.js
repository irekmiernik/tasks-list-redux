import { useTasks } from './useTasks';
import { Body } from './Body';
import { Header } from './Header';
import { Section } from './Section';
import { Form } from './Form';
import { TwoButtons } from './TwoButtons';
import { TasksList } from './TasksList';
export let taskSet = null;

export default function App() {
  taskSet = useTasks();
  return (
    <Body>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section title="Lista zadań" twoButtons={<TwoButtons />} body={<TasksList />} />
    </Body>
  );
};