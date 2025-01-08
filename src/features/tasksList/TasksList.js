import { useSelector, useDispatch } from "react-redux";
import { setTaskDone, removeTask, selectTasksTable, selectHideDone } from "./tasksListSlice";
import { StyledUl, StyledLi, StyledSpan, StyledButton } from "../../styled";
import { Link } from "react-router-dom/cjs/react-router-dom";

export const TasksList = () => {
    const tasksTable = useSelector(selectTasksTable);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    return (
        <StyledUl>
            {tasksTable.map(task => (
                <StyledLi key={task.id} hidden={hideDone && task.done}>
                    <StyledButton $done onClick={() => dispatch(setTaskDone(task.id))}>
                        {task.done ? "✔" : ""}
                    </StyledButton>
                    <StyledSpan $done={task.done}>
                        <Link to={`/zadania/${task.id}`}>{task.content}</Link>
                    </StyledSpan>
                    <StyledButton $delete onClick={() => dispatch(removeTask(task.id))}>
                        🗑
                    </StyledButton>
                </StyledLi>
            ))}
        </StyledUl>
    );
};