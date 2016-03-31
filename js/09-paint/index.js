import ask from '../utils/ask';

const CONVERSION_RATE = 350;

function gallons (l, w) {
  return Math.ceil(l * w / CONVERSION_RATE);
}

function *init () {
  const length = parseInt(yield ask('What is the room length?'), 10);
  const width = parseInt(yield ask('What is the room width?'), 10);
  return `You need ${gallons(length, width)} gallons of paint`;
}

const it = init();

it.next().value
  .then(len => it.next(len).value)
  .then(wid => it.next(wid).value)
  .then(output => console.log(output));
