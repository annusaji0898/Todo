import React from 'react';
import { useState } from 'react';
import EditFile from './EditFile';
import {v4 as uuidv4} from 'uuid';
import DisplayTodo from './DisplayTodo';
import EditTodo from './EditTodo';

function EditFileWrapper(){
    const [todos,setTodos] = useState([]);
    const addTodos = todo =>{
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}]);
    }
    console.log(todos);
    const toggleComplete = (id) =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed : !todo.completed }: todo))
    }
    const deleteTodo = (id) =>{
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const editTodo = (id) =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing : !todo.isEditing}: todo))
    }
    const editTask = (task,id) =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing : !todo.isEditing}: todo))
    }
    return (
    <div className="editfile-wrapper">
        <h1>Get the things done</h1>
        <EditFile addTodos={addTodos}/>
        {todos.map((todo,index) =>todo.isEditing ? (<EditTodo editTodo={editTask} task={todo}/>) :  (<DisplayTodo todo={todo} key={todo.id} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>))}
       
    </div> 
    )
}
export default EditFileWrapper;