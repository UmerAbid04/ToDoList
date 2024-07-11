import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function ToDoList({ tasks, setTasks }) {
    const [newTask, setNewTask] = useState('');
    const [category, setCategory] = useState('');

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function handleCategoryChange(event) {
        setCategory(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== '' && category !== '') {
            const task = { task: newTask, category: category };
            setTasks([...tasks, task]);
            setNewTask('');
        }
    }

    const filteredTasks = category ? tasks.filter(task => task.category === category) : tasks;

    return (
        <div className='todolist'>
            <h1>To Do List</h1>
            <div className="input-container">
                <input type='text' placeholder='Enter Tasks' value={newTask} onChange={handleInputChange} />
                <select value={category} onChange={handleCategoryChange}>
                    <option value=''>Select Category</option>
                    <option value='work'>Work</option>
                    <option value='personal'>Personal</option>
                    <option value='other'>Other</option>
                </select>
                <button className='Addbutton' onClick={addTask}>Add</button>
            </div>
            <nav>
                <NavLink exact to='/' className="nav-link" activeClassName="active">All</NavLink>
                <NavLink to='/category/work' className="nav-link" activeClassName="active">Work</NavLink>
                <NavLink to='/category/personal' className="nav-link" activeClassName="active">Personal</NavLink>
                <NavLink to='/category/other' className="nav-link" activeClassName="active">Other</NavLink>
            </nav>
        </div>
    );
}

export default ToDoList;
