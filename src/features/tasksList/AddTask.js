import { useState, useRef } from 'react';
import { taskSet } from './Main';
import { StyledForm, StyledInput, StyledButton } from '../../styled';

export const AddTask = () => {

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
        <StyledForm onSubmit={onDodajZadanie}>
            <StyledInput
                placeholder="Co jest do zrobienia?"
                value={taskName}
                onChange={({ target }) => setTaskName(target.value)}
                autoFocus
                ref={inputRef}
            />
            <StyledButton>Dodaj zadanie</StyledButton>
        </StyledForm>
    );
};