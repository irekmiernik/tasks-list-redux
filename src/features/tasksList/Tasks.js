import { Header } from '../../common/Header';
import { Section } from '../../common/Section';
import { AddTask } from './AddTask';
import { ExampleTasksButton } from './ExampleTasksButton';
import { HideAndAllDoneButtons } from './HideAndAllDoneButtons';
import { TasksList } from './TasksList';

export const Tasks = () => {


  return (
    <main>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" oneButton={<ExampleTasksButton />} body={<AddTask />} />
      <Section title="Znajdź zadanie" />
      <Section title="Lista zadań" twoButtons={<HideAndAllDoneButtons />} body={<TasksList />} />
    </main>
  );
};