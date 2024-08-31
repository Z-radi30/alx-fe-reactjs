import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

const App = () => {
  const initialTodos = [
    { text: 'Learn React', completed: false },
    { text: 'Build a Todo List', completed: false },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <AddTodoForm addTodo={addTodo} />
      <TodoList initialTodos={todos} />
    </div>
  );
};

export default App;
