import ask from '../utils/ask';

function *init () {
  const quote = yield ask('What is the quote?');
  const speaker = yield ask('Who said it?');
  const output = `${speaker.trim()} said "${quote.trim()}"`;
  return output.replace(/\\([\s\S])|("|')/g, "\\$1$2");
}

const it = init();

it.next().value
  .then((q) => it.next(q).value)
  .then((s) => it.next(s).value)
  .then((r) => console.log(r));
