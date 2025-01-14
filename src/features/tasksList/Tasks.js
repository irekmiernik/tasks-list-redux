import { useSelector } from 'react-redux';
import { selectEmptyTasksTable } from './tasksListSlice';
import { Header } from '../../common/Header';
import { Section } from '../../common/Section';
import { AddTask } from './AddTask';
import { ExampleTasksButton } from './ExampleTasksButton';
import { HideAndAllDoneButtons } from './HideAndAllDoneButtons';
import { TasksList } from './TasksList';
import { Search } from './Search';

export const Tasks = () => {

  const emptyTasksTable = useSelector(selectEmptyTasksTable);

  return (
    <main>
      <Header title="" />
      <Section title="Dodaj nowe zadanie do listy" oneButton={<ExampleTasksButton />} body={<AddTask />} />
      {emptyTasksTable ? "" :
        <Section title="Wybierz interesujące Cię zadania" body={<Search />} />}
      <Section title="Lista wybranych zadań" twoButtons={<HideAndAllDoneButtons />} body={<TasksList />} />
    </main>
  );
};