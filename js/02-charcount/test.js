import test from 'tape';
import counter from './counter';

test('counter', (t) => {
  t.plan(1);
  t.equal('123 has 3 characters.', counter('123'));
});
