import { useSelector, useDispatch } from "react-redux";
import {
    toggleHideDone,
    setAllTasksDone,
    selectHideDone,
    selectEmptyTasksTable,
    selectEveryDone,
    selectNooneDone,
} from "./tasksListSlice";
import { StyledButton } from "../../styled";
import { useQueryParameter } from "./useSearch";
import { searchParameters } from "./searchParameters";

export const HideAndAllDoneButtons = () => {

    const query = useQueryParameter(searchParameters);

    const emptyTasksTable = useSelector(selectEmptyTasksTable);
    const hideDone = useSelector(selectHideDone);
    const everyDone = useSelector(selectEveryDone);
    const nooneDone = useSelector(selectNooneDone);
    const dispatch = useDispatch();

    return ((!emptyTasksTable && !query) &&
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