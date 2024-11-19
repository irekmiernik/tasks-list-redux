import { useState, useRef } from 'react';

const Form = ({ taskSet }) => {

    const onDodajZadanie = (event) => {
        event.preventDefault();
        if (taskName.trim() !== "") {
            taskSet.addTask(taskName.trim());
            setTaskName("");
        };
        inputRef.current.focus();
    };

    const [taskName, setTaskName] = useState("");

    const inputRef = useRef(null);

    return (
        <form className="sectionFlex" onSubmit={onDodajZadanie}>
            <input
                className="sectionFlex__itemContent"
                placeholder="Co jest do zrobienia?"
                value={taskName}
                onChange={({ target }) => setTaskName(target.value)}
                autoFocus
                ref={inputRef}
            />
            <button className="sectionFlex__itemButton">Dodaj zadanie</button>
        </form>
    );
}

export default Form;