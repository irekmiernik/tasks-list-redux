import { Header } from '../../common/Header';
import { Section } from '../../common/Section';
import { AddTask } from './AddTask';
import { OneButton } from './OneButton';
import { TwoButtons } from './TwoButtons';
import { TasksList } from './TasksList';

export const Main = () => {

  return (
    <main>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" oneButton={<OneButton />} body={<AddTask />} />
      <Section title="Znajdź zadanie" />
      <Section title="Lista zadań" twoButtons={<TwoButtons />} body={<TasksList />} />
    </main>
  );
};