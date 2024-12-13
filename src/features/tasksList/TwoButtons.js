import { useSelector, useDispatch } from "react-redux";
import { tasksState, toggleHideTasks, setAllTasksDone } from "./tasksListSlice";
import { StyledButton } from "../../styled";

export const TwoButtons = () => {

    const { tasksTable, hideTasks } = useSelector(tasksState);
    const dispatch = useDispatch();

    return ((tasksTable.length > 0) &&
        (
            <>
                <StyledButton
                    $header
                    disabled={tasksTable.every(({ done }) => !done)}
                    onClick={() => dispatch(toggleHideTasks())}
                >
                    {hideTasks ? "Pokaż" : "Ukryj"} ukończone
                </StyledButton>
                <StyledButton
                    $header
                    disabled={tasksTable.every(({ done }) => done)}
                    onClick={() => dispatch(setAllTasksDone())}
                >
                    Ukończ wszystkie
                </StyledButton>
            </>
        )
    );
};