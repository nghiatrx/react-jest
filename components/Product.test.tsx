import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import Product from './Product';

jest.mock("../utils/sendLikeToServer", () => {
  const originalModule = jest.requireActual('../utils/sendLikeToServer');
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => true),
  }
});

jest.mock("../utils/sendUnLikeToServer", () => {
  const originalModule = jest.requireActual('../utils/sendUnLikeToServer');
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => true),
  }
});

let product

beforeEach(() => {
  product = {
    title: 'Free Lohri Elements Vector',
    id: 1,
    newFeaturedImage: '/85016/free-cartoon-lohri-vector-pmaxe.jpg'
  }
});

test('Product Like Btn Testing', async () => {
  const { container } = render(
    <Product product={product} />
  );
  const likeBtn = container.querySelector('.like-btn')
  fireEvent.click(likeBtn)
  await waitFor(() => {
    expect(likeBtn.innerHTML).toBe('Liked')
  })
  fireEvent.click(likeBtn)
  await waitFor(() => {
    expect(likeBtn.innerHTML).toBe('Like')
  })
})
