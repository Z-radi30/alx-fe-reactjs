import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';
import { fireEvent } from '@testing-library/react';

describe('TodoList Component', () => {
  test('renders the initial todos correctly', () => {
    render(<TodoList />);

    // Verify that the initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo List')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
  });
});

describe('TodoList Component', () => {
    // Previous tests...
  
    test('allows users to add a new todo', () => {
      render(<TodoList />);
  
      // Simulate adding a new todo
      const addButton = screen.getByText('Add Demo Todo');
      fireEvent.click(addButton);
  
      // Verify that the new todo is added
      expect(screen.getByText('New Todo')).toBeInTheDocument();
    });
  });


  describe('TodoList Component', () => {
    // Previous tests...
  
    test('toggles a todo item between completed and not completed', () => {
      render(<TodoList />);
  
      const todoItem = screen.getByText('Learn React');
  
      // Simulate toggling the todo item
      fireEvent.click(todoItem);
  
      // Verify that the todo is marked as completed
      expect(todoItem).toHaveStyle('text-decoration: line-through');
  
      // Simulate toggling the todo item again
      fireEvent.click(todoItem);
  
      // Verify that the todo is marked as not completed
      expect(todoItem).toHaveStyle('text-decoration: none');
    });
  });


  describe('TodoList Component', () => {
    // Previous tests...
  
    test('deletes a todo item', () => {
      render(<TodoList />);
  
      const deleteButton = screen.getAllByText('Delete')[0];
  
      // Simulate deleting the first todo item
      fireEvent.click(deleteButton);
  
      // Verify that the todo is removed from the document
      expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    });
  });
  