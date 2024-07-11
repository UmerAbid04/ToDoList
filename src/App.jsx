import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ToDoList from './ToDoList';
import TasksByCategory from './TasksByCategory';

function App() {
    const [tasks, setTasks] = useState([]);

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <Router>
            <ToDoList tasks={tasks} setTasks={setTasks} />
            <Routes>
                <Route path='/' element={<TasksByCategory tasks={tasks} deleteTask={deleteTask} moveUp={moveUp} moveDown={moveDown} />} />
                <Route path='/category/:category' element={<TasksByCategory tasks={tasks} deleteTask={deleteTask} moveUp={moveUp} moveDown={moveDown} />} />
            </Routes>
        </Router>
    );
}

export default App;
