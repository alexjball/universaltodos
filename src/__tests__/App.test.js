import 'react-native';
import React from 'react';
import App from '../App';
import { render, fireEvent, wait } from '../functionalTesting';

it('renders correctly', () => {
  expect(render(<App />)).toMatchSnapshot();
});

it('can add task', async () => {
  const { getByLabelText } = render(<App />);

  const addTodo = getByLabelText('add task');
  fireEvent.press(addTodo);
  await wait(() => expect(getByLabelText('task card')).toBeTruthy());
});
