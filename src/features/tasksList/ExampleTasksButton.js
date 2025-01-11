import { useSelector, useDispatch } from "react-redux";
import { fetchExamapleTasks, selectEmptyTasksTable, selectLoading } from "./tasksListSlice";
import { StyledButton } from "../../styled";

export const ExampleTasksButton = () => {

  const emptyTasksTable = useSelector(selectEmptyTasksTable);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  return (
    <StyledButton
      $header
      disabled={!emptyTasksTable || loading}
      onClick={() => dispatch(fetchExamapleTasks())}
    >
      {
        loading
          ? "Pobieranie zadań..."
          : "Pokaż przykładowe zadania"
      }
    </StyledButton>
  );
};