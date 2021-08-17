import './App.css';
import { useTodoLayerValue } from './context/TodoContext';
import TodoList from "./components/TodoList"
import React, { useState,useEffect, useRef } from 'react'

const App = () => {

  const [{todos}, dispatch] = useTodoLayerValue();
  const [content, setContent] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    console.log(content)
    e.preventDefault();

    if(!content && content.length < 1) return;

    const newTodo = {
      id: Math.floor(Math.random() * 12312312312),
      content,
      isCompleted: false,
    };

    dispatch({
      type: 'ADD_TODO',
      payload: newTodo,
    });

    setContent(' ')
  }

  return (
    <div className = "container">
      <form onSubmit = {handleSubmit} className = "todo-form">
        <input type = "text" className = "todo-input" onChange = {((event)  => setContent(event.target.value))} value = {content} ref={inputRef}></input>
        <button className = "todo-button">
          ADD
        </button>
      </form>

      {/* ToDoList Add Todo */}

      <TodoList todos = {todos} />

    </div>
  )
}

export default App

