import { useSelector, useDispatch } from "react-redux";
import { fetchExamaplesTasks, selectTasksTable } from "./tasksListSlice";
import { StyledButton } from "../../styled";

export const OneButton = () => {

  const tasksTable = useSelector(selectTasksTable);
  const dispatch = useDispatch();

  return (
    <StyledButton
      $header
      disabled={tasksTable.length > 0}
      onClick={() => dispatch(fetchExamaplesTasks())}
    >
      Pokaż przykładowe zadania
    </StyledButton>
  );
};