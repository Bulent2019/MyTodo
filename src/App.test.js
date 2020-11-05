import React from 'react';

import {  render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TodoTable from './components/TodoTable';
// import Todolist from './components/qTodolist';
import App from './App';


test ('renders todotable', () => {
        const row = [
            {desc: 'Go to coffee', date: '24.11.2020'}
        ]

        const todotable = render(<TodoTable todos={row} />);
        expect(todotable.container).toHaveTextContent('Go to coffee');
    })


test('add todo', () => {
  const { container, getByText, getByPlaceholderText } = render(<App/>);

  const desc = getByPlaceholderText('Description');
  change(desc, { target: {value: 'Go to coffee'} })

  const date = getByPlaceholderText('Date');
  change(date, {target: {value: '29.11.2020'} })

  const button = getByText('Add');
  click(button);

  expect(container).toHaveTextContent('Go to coffee');
})
