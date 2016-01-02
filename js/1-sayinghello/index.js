import { default as greeter } from './utils';
process.stdin.resume();
process.stdin.setEncoding('utf8');
console.log(`What's your name?`);
process.stdin.on('data', (text) => {
  console.log(greeter(text));
  process.exit();
});
