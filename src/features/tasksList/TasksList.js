import { useSelector, useDispatch } from "react-redux";
import { setTaskDone, removeTask, selectTasksTable, selectHideDone } from "./tasksListSlice";
import { StyledUl, StyledLi, StyledSpan, StyledButton } from "../../styled";

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
                    <StyledSpan $done={task.done}>{task.content}</StyledSpan>
                    <StyledButton $delete onClick={() => dispatch(removeTask(task.id))}>
                        🗑
                    </StyledButton>
                </StyledLi>
            ))}
        </StyledUl>
    );
};