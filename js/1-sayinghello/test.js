import test from 'tape';
import { default as greeter } from './utils';

test('greeter', (t) => {
  t.plan(1);
  const expected = 'Hello A.';
  const actual = greeter('A');
  t.equal(expected, actual);
});
