import { useSelector, useDispatch } from "react-redux";
import { tasksState, fetchExamaplesTasks } from "./tasksListSlice";
import { StyledButton } from "../../styled";

export const OneButton = () => {

  const { tasksTable } = useSelector(tasksState);
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