import ask from '../utils/ask';
import { yearsLeft, retYear } from './calc';

function *init () {
  const curAge = parseInt(yield ask('What is your current age?'), 10);
  const retAge = parseInt(yield ask('At what age will you retire?'), 10);
  const now = new Date();
  const years = yearsLeft(curAge, retAge);
  return years <= 0 ? 'Do it now.' : `
    You have ${years} until you can retire.
    It's ${now.getFullYear()}, so you can retire in ${retYear(curAge, retAge, now)}.
  `
}

const it = init();
it.next().value
  .then(curAge => it.next(curAge).value)
  .then(retAge => it.next(retAge).value)
  .then((output) => console.log(output));
