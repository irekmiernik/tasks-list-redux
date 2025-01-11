import { useParams } from 'react-router-dom';
import { Header } from '../../common/Header';
import { Section } from '../../common/Section';
import { useSelector } from 'react-redux';
import { selectTaskById } from './tasksListSlice';

export const TaskPage = () => {
  const { id } = useParams();
  const task = useSelector(state => selectTaskById(state, id));

  return (
    <main>
      <Header title="Opis wybranego zadania" />
      <Section
        title={task ? task.content : "Niestety nie znaleziono zadania."}
        body={!!task && (
          <p>
            <strong>Ukończono: </strong>{task.done ? "TAK" : "NIE"}
          </p>
        )}
      />
    </main>
  );
};