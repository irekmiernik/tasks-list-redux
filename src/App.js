import { useTasks } from './useTasks';
import Body from './Body';
import Header from './Body/Header';
import Section from './Body/Section';
import Form from './Body/Section/Form';
import TwoButtons from './Body/Section/TwoButtons';
import TasksList from './Body/Section/TasksList';

function App() {

  const taskSet = useTasks();

  return (
    <Body>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form taskSet={taskSet} />}
      />
      <Section
        title="Lista zadań"
        twoButtons={<TwoButtons taskSet={taskSet} />}
        body={<TasksList taskSet={taskSet} />}
      />
    </Body>
  );
};

export default App;
