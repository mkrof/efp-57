import ask from '../utils/ask';

const simplePlural = (word) => {
  return num => word + (num === 1 ? '' : 's');
};

function *init () {
  const numPeople = parseInt(yield ask('How many people?'), 10);
  const numPizzas = parseInt(yield ask('How many pizzas?'), 10);
  const slicesPer = parseInt(yield ask('How many slices per pizza?'), 10);
  const numSlices = slicesPer * numPizzas;
  const leftOvers = numSlices % numPeople;
  const slicesEach = Math.floor(numSlices / numPeople);
  const pizza = simplePlural('pizza')(numPizzas);
  const slices = simplePlural('slice');
  return `
    ${numPeople} people with ${numPizzas} ${pizza}.
    Each person gets ${slicesEach} ${slices(slicesEach)}.
    There will be ${leftOvers} ${slices(leftOvers)} left.
  `;
}

const it = init();

it.next().value
  .then(people => it.next(people).value)
  .then(pizzas => it.next(pizzas).value)
  .then(slices => it.next(slices).value)
  .then(output => console.log(output));
