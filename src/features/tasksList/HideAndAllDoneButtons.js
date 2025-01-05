import { useSelector, useDispatch } from "react-redux";
import {
    toggleHideDone,
    setAllTasksDone,
    selectHideDone,
    selectEmptyTasksTable,
    selectEveryDone,
    selectNooneDone
} from "./tasksListSlice";
import { StyledButton } from "../../styled";

export const HideAndAllDoneButtons = () => {

    const emptyTasksTable = useSelector(selectEmptyTasksTable);
    const hideDone = useSelector(selectHideDone);
    const everyDone = useSelector(selectEveryDone);
    const nooneDone = useSelector(selectNooneDone);
    const dispatch = useDispatch();

    return (!emptyTasksTable &&
        (
            <>
                <StyledButton
                    $header
                    disabled={nooneDone}
                    onClick={() => dispatch(toggleHideDone())}
                >
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </StyledButton>
                <StyledButton
                    $header
                    disabled={everyDone}
                    onClick={() => dispatch(setAllTasksDone())}
                >
                    Ukończ wszystkie
                </StyledButton>
            </>
        )
    );
};