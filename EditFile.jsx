import React from 'react';
import { useState } from 'react';
import './EditFile.css';



function EditFile(props) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        props.addTodos(value)
        setValue("");
    }

    return (
        <div>
            <form className="todo">
                <input type="text" className="todo-input-item" placeholder="what is the task today" value={value} onChange={(e) => setValue(e.target.value)}></input>
                <button type="button" onClick={handleSubmit} className="todo-btn">Add Task</button>
            </form>
        </div>

    )
}

export default EditFile;