import greeter from './greeter';
import ask from '../utils/ask.js';

ask('What is your name?', (text) => {
  console.log(greeter(text));
  process.exit();
});
