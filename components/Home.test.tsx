import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

afterEach(cleanup);

test('Home Snapshot Testing', () => {
  const component = renderer.create(
    <Home />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Home DOM Testing', () => {
  const { container } = render(
    <Home />
  );
  const value = container.querySelector('#value')
  const increaseBtn = container.querySelector('#increase-btn')
  const decreaseBtn = container.querySelector('#decrease-btn')
  expect(value.innerHTML).toEqual('0')
  fireEvent.click(increaseBtn)
  expect(value.innerHTML).toEqual('1')
  fireEvent.click(decreaseBtn)
  expect(value.innerHTML).toEqual('0')
})


