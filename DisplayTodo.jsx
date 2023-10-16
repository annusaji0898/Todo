import React from 'react'
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";



function DisplayTodo(props) {
    
    
    console.log(props.todo);
    return (
        <div className="todo-list-item">
            <p onClick= {() => props.toggleComplete(props.todo.id)} className={`${props.todo.completed ? 'completed': " " }`}> {props.todo?.task}</p>
            <div className="icon">
            <AiOutlineCheck onClick = {()=>props.editTodo(props.todo.id)} />
            <AiOutlineDelete onClick = {()=>props.deleteTodo(props.todo.id)}/>
            </div>
        </div>

    )
}
export default DisplayTodo;