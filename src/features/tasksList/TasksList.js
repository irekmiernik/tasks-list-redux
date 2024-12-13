import { useSelector, useDispatch } from "react-redux";
import { tasksState, setTaskDone, removeTask } from "./tasksListSlice";
import { StyledUl, StyledLi, StyledSpan, StyledButton } from "../../styled";

export const TasksList = () => {
    const { tasksTable, hideTasks } = useSelector(tasksState);
    const dispatch = useDispatch();

    return (
        <StyledUl>
            {tasksTable.map(task => (
                <StyledLi key={task.id} hidden={hideTasks && task.done}>
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