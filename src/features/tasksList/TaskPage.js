import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { Header } from '../../common/Header';
import { Section } from '../../common/Section';
import { useSelector } from 'react-redux';
import { selectTaskbyId } from './tasksListSlice';

export const TaskPage = () => {
  const { id } = useParams();
  const task = useSelector(state => selectTaskbyId(state, id));

  return (
    <main>
      <Header title="Opis wybranego zadania" />
      <Section
        title={task ? task.content : "Nie znaleziono zadania."}
        body={
          <p>
            <strong>Ukończono: </strong>{task.done ? "TAK" : "NIE"}
          </p>}
      />
    </main>
  );
};