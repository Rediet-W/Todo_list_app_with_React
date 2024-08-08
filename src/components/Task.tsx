import React from 'react';

interface TaskProps {
    taskValue: string;
    onEdit: () => void;
    onDelete: () => void;
}

const Task: React.FC<TaskProps> = ({ taskValue, onEdit, onDelete }) => {
    return (
        <div className="task-container">
            <input type="checkbox" id="Delete" onClick={onDelete} />
            <p>{taskValue}</p>
            <button id="Edit" onClick={onEdit}>Edit</button>
        </div>
    );
};

export default Task;
