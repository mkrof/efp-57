import greeter from './greeter';
import ask from '../utils/ask.js';

ask('What is your name?')
  .then((name) => {
    console.log(greeter(name));
    process.exit();
  });
