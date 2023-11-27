import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {useNavigation} from '@react-navigation/core';
import TodoItem from '../TodoItem';

// Mock navigation functions
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('TodoItem component', () => {
  const mockTodo = {
    id: 1,
    title: 'Sample Title',
    body: 'Sample body content for testing',
    image: 'https://example.com/image.jpg',
  };

  test('renders todo item correctly', () => {
    const {getByText, getByTestId} = render(<TodoItem {...mockTodo} />);

    const titleElement = getByText('Sample Title');
    const bodyElement = getByText('Sample body content for testing');
    const imageElement = getByTestId('todo-image');

    expect(titleElement).toBeTruthy();
    expect(bodyElement).toBeTruthy();
    expect(imageElement.props.source.uri).toBe(mockTodo.image);
  });

  test('truncates body text properly', () => {
    const {getByText} = render(<TodoItem {...mockTodo} />);

    const truncatedBody = getByText('Sample body content...');
    expect(truncatedBody).toBeTruthy();
  });

  test('navigates to TodoDescription screen on press', () => {
    const {getByTestId} = render(<TodoItem {...mockTodo} />);

    const todoItem = getByTestId('todo-item');
    fireEvent.press(todoItem);

    expect(useNavigation().navigate).toHaveBeenCalledWith('TodoDescription', {
      id: mockTodo.id,
      title: mockTodo.title,
      body: mockTodo.body,
      image: mockTodo.image,
    });
  });

  test('checkbox toggles correctly', () => {
    const {getByTestId} = render(<TodoItem {...mockTodo} />);

    const checkbox = getByTestId('todo-checkbox');
    fireEvent.press(checkbox);

    expect(checkbox.props.value).toBe(true);
  });
});
