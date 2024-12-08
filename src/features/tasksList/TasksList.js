import { taskSet } from "./Main";
import { StyledUl, StyledLi, StyledSpan, StyledButton } from "../../styled";

export const TasksList = () =>
(
    <StyledUl>
        {taskSet.tasksTable.map(task => (
            <StyledLi key={task.id} hidden={taskSet.hideTasks && task.done}>
                <StyledButton $done onClick={() => { taskSet.setTaskDone(task.id) }}>
                    {task.done ? "✔" : ""}
                </StyledButton>
                <StyledSpan $done={task.done}>{task.content}</StyledSpan>
                <StyledButton $delete onClick={() => { taskSet.removeTask(task.id) }}>
                    🗑
                </StyledButton>
            </StyledLi>
        ))}
    </StyledUl>
);