import test from 'tape';
import { yearsLeft, retYear } from './calc';

test('yearsLeft', (t) => {
  t.plan(2);
  t.equal(10, yearsLeft(10, 20));
  t.equal(0, yearsLeft(10, 10));
});

test('retYear', (t) => {
  const now = new Date();
  let nowCopy = new Date(now.getTime());
  const actual = retYear(10, 20, now);
  nowCopy.setFullYear(now.getFullYear() + 10);
  const expected = nowCopy.getFullYear();
  t.plan(1);
  t.equal(expected, actual);
});
