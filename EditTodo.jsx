import React from 'react';
import { useState } from 'react';
function EditTodo () {
    const [value, setValue] = useState()
    

    const handleSubmit = (props) => {
        props.editTodos(value,props.todo.id)
        setValue("");
    }

    return (
        <div>
            <form className="todo">
                <input type="text" className="todo-input-item" placeholder="Update Task" value={value} onChange={(e) => setValue(e.target.value)}></input>
                <button type="button" onClick={handleSubmit} className="todo-btn">Update Task</button>
            </form>
        </div>

    )
}
export default EditTodo;