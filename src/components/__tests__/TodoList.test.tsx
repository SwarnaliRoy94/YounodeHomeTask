import React from 'react';
import {render, waitFor, fireEvent} from '@testing-library/react-native';
import TodoList from '../TodoList';
import {useGetTodosQuery} from '../../../app/api/todoApi';
import {useSelector} from 'react-redux';
// import TodoList from './TodoList';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../../../app/api/todoApi', () => ({
  useGetTodosQuery: jest.fn(),
}));

describe('TodoList component', () => {
  beforeEach(() => {
    // Mocking useSelector with some mock data
    (useSelector as jest.Mock).mockReturnValue([
      {
        id: '1',
        title: 'Task 1',
        body: 'Description for Task 1',
        image_url: 'task1.jpg',
      },
      {
        id: '2',
        title: 'Task 2',
        body: 'Description for Task 2',
        image_url: 'task2.jpg',
      },
    ]);

    // Mocking useGetTodosQuery with mock data
    (useGetTodosQuery as jest.Mock).mockReturnValue({
      data: [
        {
          id: '1',
          title: 'Task 1',
          body: 'Description for Task 1',
          image_url: 'task1.jpg',
        },
        {
          id: '2',
          title: 'Task 2',
          body: 'Description for Task 2',
          image_url: 'task2.jpg',
        },
      ],
      isLoading: false,
      refetch: jest.fn(), // Mocking refetch function
    } as any);
  });

  it('renders tasks when data is available', async () => {
    const {getByText, getByTestId} = render(<TodoList />);

    await waitFor(() => {
      expect(getByText('You have some tasks to complete!!')).toBeTruthy();
    });

    expect(getByTestId('todo-item-1')).toBeTruthy();
    expect(getByTestId('todo-item-2')).toBeTruthy();
  });

  it('renders no tasks message when data is empty', async () => {
    (useGetTodosQuery as jest.Mock).mockReturnValueOnce({
      data: [],
      isLoading: false,
      refetch: jest.fn(), // Mocking refetch function
    } as any);
    const {getByText} = render(<TodoList />);

    await waitFor(() => {
      expect(getByText('Oops! No task to show!')).toBeTruthy();
    });
  });

  it('fetches more data when end of list is reached', async () => {
    const refetchMock = jest.fn();
    (useGetTodosQuery as jest.Mock).mockReturnValueOnce({
      data: [
        {
          id: '3',
          title: 'Task 3',
          body: 'Description for Task 3',
          image_url: 'task3.jpg',
        },
      ],
      isLoading: false,
      refetch: refetchMock,
    } as any);

    const {getByTestId} = render(<TodoList />);
    fireEvent.scroll(getByTestId('flatlist'), {
      nativeEvent: {contentOffset: {y: 100}},
    });

    await waitFor(() => {
      expect(refetchMock).toHaveBeenCalledWith({page: 2, limit: 200});
    });
  });
});
