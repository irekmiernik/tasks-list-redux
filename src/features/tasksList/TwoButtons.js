import { taskSet } from "./Main";
import { StyledButton } from "../../styled";

export const TwoButtons = () =>

    (taskSet.tasksTable.length > 0) &&
    (
        <>
            <StyledButton
                $header
                disabled={taskSet.tasksTable.every(({ done }) => !done)}
                onClick={taskSet.toggleHideTasks}
            >
                {taskSet.hideTasks ? "Pokaż" : "Ukryj"} ukończone
            </StyledButton>
            <StyledButton
                $header
                disabled={taskSet.tasksTable.every(({ done }) => done)}
                onClick={taskSet.setAllTasksDone}
            >
                Ukończ wszystkie
            </StyledButton>
        </>
    );