import { useSelector, useDispatch } from "react-redux";
import { setTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "./tasksListSlice";
import { StyledUl, StyledLi, StyledSpan, StyledButton, StyledLink } from "../../styled";
import { searchParameters } from "./searchParameters";
import { useQueryParameter } from "./useSearch";
import { toTask } from "../../routs";

export const TasksList = () => {

    const query = useQueryParameter(searchParameters);
    const tasksTable = useSelector(state => selectTasksByQuery(state, query));
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
                        <StyledLink to={toTask({ id: task.id })}>{task.content}</StyledLink>
                    </StyledSpan>
                    <StyledButton $delete onClick={() => dispatch(removeTask(task.id))}>
                        🗑
                    </StyledButton>
                </StyledLi>
            ))}
        </StyledUl>
    );
};