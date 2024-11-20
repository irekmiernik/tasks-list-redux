import { useTasks } from './useTasks';
import Body from './Body';
import { Header } from './Body/Header';
import Section from './Body/Section';
import Form from './Body/Section/Form';
import TwoButtons from './Body/Section/TwoButtons';
import TasksList from './Body/Section/TasksList';

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