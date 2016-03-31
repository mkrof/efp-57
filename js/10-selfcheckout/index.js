import ask from '../utils/ask';
import calc from './calc';

const TAX_RATE = 5.5;

function *init () {
  let p1 = parseInt(yield ask('Enter the price of item 1:'), 10);
  p1 = p1 * parseInt(yield ask('Enter the quantity of item 1:'), 10);
  let p2 = parseInt(yield ask('Enter the price of item 2:'), 10);
  p2 = p2 * parseInt(yield ask('Enter the quantity of item 2:'), 10);
  let p3 = parseInt(yield ask('Enter the price of item 3:'), 10);
  p3 = p3 * parseInt(yield ask('Enter the quantity of item 3:'), 10);
  const subtotal = calc.total(p1, p2, p3);
  const tax = calc.tax(subtotal, TAX_RATE);
  return `
    Subtotal: $${subtotal}
    Tax: $${tax}
    Total: $${subtotal + tax}
  `;
}

const it = init();

it.next().value
  .then(p1 => it.next(p1).value)
  .then(q1 => it.next(q1).value)
  .then(p2 => it.next(p2).value)
  .then(q2 => it.next(q2).value)
  .then(p3 => it.next(p3).value)
  .then(q3 => it.next(q3).value)
  .then(output => console.log(output));
