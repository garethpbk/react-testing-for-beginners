import { add } from './App';

// Unit test
// It only tests one thing
test('add', () => {
  expect(add(1, 2)).toBe(3);
  expect(add(5, -15)).toEqual(-10);
});
