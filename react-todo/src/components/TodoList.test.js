import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders the initial todos correctly', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
  });

  test('allows users to add a new todo', () => {
    render(<TodoList />);
    fireEvent.click(screen.getByText('Add Demo Todo'));
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles a todo item between completed and not completed', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo item', () => {
    render(<TodoList />);
    fireEvent.click(screen.getAllByText('Delete')[0]);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
