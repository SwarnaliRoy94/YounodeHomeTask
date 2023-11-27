import React from 'react';
import renderer from 'react-test-renderer';
import TodoDescription from '../components/todos/TodoDescription';

describe('TodoDescription component', () => {
  it('renders correctly', () => {
    renderer.create(<TodoDescription route={''} />);
  });
});
