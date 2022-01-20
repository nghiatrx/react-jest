import decrease from "./decrease";

test('decrease 1', () => {
  const result = decrease(1)
  expect(result).toBe(0)
});

test('decrease 10', () => {
  const result = decrease(10)
  expect(result).toBe(9)
});

test('decrease 0', () => {
  const result = decrease(0)
  expect(result).toBe(0)
});

