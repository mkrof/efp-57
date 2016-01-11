import test from 'tape';
import greeter from './greeter';

test('greeter', (t) => {
  t.plan(1);
  const expected = 'Hello A.';
  const actual = greeter('A');
  t.equal(expected, actual);
});
