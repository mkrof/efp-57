import test from 'tape';
import calc from './calc';

test('rectArea', (t) => {
  t.plan(1);
  t.equal(calc.rectArea(10, 10), 100);
});

test('feet2Meters', (t) => {
  t.plan(1);
  t.equal(calc.feet2Meters(5), 1.5240185320653499);
});
