import React, { useState } from 'react';

interface TaskInputProps {
    onAddTask: (taskValue: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
    const [inputValue, setInputValue] = useState('');

    const handleAddTask = () => {
        if (inputValue) {
            onAddTask(inputValue);
            setInputValue('');
        } else {
            alert('You cannot add an empty task');
        }
    };

    return (
        <div>
            <input 
                type="text" 
                id="myinput" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button id="Add" onClick={handleAddTask}>Add</button>
        </div>
    );
};

export default TaskInput;
