import React from 'react';
import {render} from '@testing-library/react-native';
import TodoDescription from '../TodoDescription';

describe('TodoDescription component', () => {
  const mockRoute = {
    params: {
      title: 'Sample Title',
      body: 'Sample body content for testing',
      image: 'https://example.com/image.jpg',
    },
  };

  test('renders todo description correctly', () => {
    const {getByText, getByTestId} = render(
      <TodoDescription route={mockRoute} />,
    );

    const titleElement = getByText('Sample Title');
    const bodyElement = getByText('Sample body content for testing');
    const imageElement = getByTestId('todo-image');

    expect(titleElement).toBeTruthy();
    expect(bodyElement).toBeTruthy();
    expect(imageElement.props.source.uri).toBe(mockRoute.params.image);
  });

  test('linear gradient styling is applied', () => {
    const {getByTestId} = render(<TodoDescription route={mockRoute} />);

    const linearGradient = getByTestId('linear-gradient');

    expect(linearGradient).toHaveProp('start', {x: 0, y: 0});
    expect(linearGradient).toHaveProp('end', {x: 0, y: 1});
    expect(linearGradient).toHaveProp('colors', [
      '#D2B4DE',
      '#ECE3ED',
      '#FAE5D3',
      '#ECE3ED',
      '#D2B4DE',
    ]);
  });

  // Add more tests to cover additional aspects of the component as needed
});
