const TwoButtons = ({ taskSet }) =>

    (taskSet.tasksTable.length > 0) &&
    (
        <>
            <button
                className="sectionFlex__itemButton"
                disabled={taskSet.tasksTable.every(({ done }) => !done)}
                onClick={taskSet.toggleHideTasks}
            >
                {taskSet.hideTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="sectionFlex__itemButton"
                disabled={taskSet.tasksTable.every(({ done }) => done)}
                onClick={taskSet.setAllTasksDone}
            >
                Ukończ wszystkie
            </button>
        </>
    );
export default TwoButtons;
