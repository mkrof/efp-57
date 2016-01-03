import ask from '../utils/ask';

function *init () {
  const noun = yield ask('Enter a noun');
  const verb = yield ask('Enter a verb');
  const adj = yield ask('Enter a adjective');
  const adv = yield ask('Enter a adverb');
  return `The ${adj} ${noun} likes to ${verb} ${adv}`;
}

const it = init();
const next = val => it.next(val.trim()).value;

it.next().value
  .then(noun => next(noun))
  .then(verb => next(verb))
  .then(adj => next(adj))
  .then(adv => next(adv))
  .then(output => console.log(output));
