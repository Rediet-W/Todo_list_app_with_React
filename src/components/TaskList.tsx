import React, { useState } from 'react';
import Task from './Task';
import TaskInput from './TaskInput';

interface Task {
    id: number;
    value: string;
}

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleAddTask = (taskValue: string) => {
        const newTask = { id: Date.now(), value: taskValue };
        setTasks([...tasks, newTask]);
    };

    const handleEditTask = (id: number) => {
        const editedValue = prompt('Enter the task name');
        if (editedValue) {
            setTasks(tasks.map(task => (task.id === id ? { ...task, value: editedValue } : task)));
        }
    };

    const handleDeleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div>
            <TaskInput onAddTask={handleAddTask} />
            <div id="container">
                {tasks.map(task => (
                    <Task
                        key={task.id}
                        taskValue={task.value}
                        onEdit={() => handleEditTask(task.id)}
                        onDelete={() => handleDeleteTask(task.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default TaskList;
