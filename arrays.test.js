import { manualArrayLength } from './arrays';
describe('manualArrayLength', () => {
  test('If given an empty array as an argument it should return 0 ', () => {
    const x = [];
    const expected = 0;
    const r = manualArrayLength(x);
    expect(r).toBe(expected);
  });
});

test('If given a one element array as argument it should return 1 ', () => {
  const x = [1];
  const expected = 1;
  const r = manualArrayLength(x);
  expect(r).toBe(expected);
});
