import { useSelector, useDispatch } from "react-redux";
import { fetchExamapleTasks, selectTasksTable } from "./tasksListSlice";
import { StyledButton } from "../../styled";

export const ExampleTasksButton = () => {

  const tasksTable = useSelector(selectTasksTable);
  const dispatch = useDispatch();

  return (
    <StyledButton
      $header
      disabled={tasksTable.length > 0}
      onClick={() => dispatch(fetchExamapleTasks())}
    >
      Pokaż przykładowe zadania
    </StyledButton>
  );
};