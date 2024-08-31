import React, { useState } from 'react';

const TodoList = () => {
  // Initialize the state with a few todos
  const [todos, setTodos] = useState([
    { text: 'Learn React', completed: false },
    { text: 'Build a Todo List', completed: false },
    { text: 'Write tests', completed: false },
  ]);

  // Method to add a new todo
  const addTodo = (todoText) => {
    const newTodo = { text: todoText, completed: false };
    setTodos([...todos, newTodo]);
  };

  // Method to toggle the completion status of a todo
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  // Method to delete a todo
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            <span onClick={() => toggleTodo(index)}>{todo.text}</span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      {/* This button is for demonstration and testing purposes. */}
      <button onClick={() => addTodo('New Todo')}>Add Demo Todo</button>
    </div>
  );
};

export default TodoList;
