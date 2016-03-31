import test from 'tape';
import calc from './calc';

test('total', t => {
  t.plan(4);
  t.equal(calc.total(1,2,3), 6);
  t.equal(calc.total(1,2,3,4), 10);
  t.equal(calc.total(), 0);
  t.equal(calc.total(-1, 1), 0);
});

test('tax', t => {
  t.plan(3);
  t.equal(calc.tax(64, 5.5), 3.52);
  t.equal(calc.tax(64, 0), 0);
  t.equal(calc.tax(64, 100), 64);
});
