import ask from '../utils/ask';

function *init () {
  const n1 = parseInt(yield ask('Enter the first number:'), 10);
  const n2 = parseInt(yield ask('Enter the second number:'), 10);
  return `
    ${n1} + ${n2} = ${n1 + n2}
    ${n1} - ${n2} = ${n1 - n2}
    ${n1} * ${n2} = ${n1 * n2}
    ${n1} / ${n2} = ${n1 / n2}
  `
}

const it = init();

it.next().value
  .then(n1 => it.next(n1).value)
  .then(n2 => it.next(n2).value)
  .then(output => console.log(output));
