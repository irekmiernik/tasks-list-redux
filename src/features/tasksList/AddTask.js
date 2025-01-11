import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { StyledForm, StyledInput, StyledButton } from '../../styled';
import { addTask } from './tasksListSlice';
import { nanoid } from '@reduxjs/toolkit';

export const AddTask = () => {

    const [taskName, setTaskName] = useState("");
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const onDodajZadanie = (event) => {
        event.preventDefault();
        if (taskName.trim() !== "") {
            dispatch(addTask({
                id: nanoid(),
                content: taskName.trim(),
                done: false,
            }));
            setTaskName("");
        };
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onDodajZadanie}>
            <StyledInput
                $add
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