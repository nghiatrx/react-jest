import increase from "./increase";

test('increase 1', () => {
  const result = increase(1)
  expect(result).toBe(2)
});

test('increase 10', () => {
  const result = increase(10)
  expect(result).toBe(11)
});
