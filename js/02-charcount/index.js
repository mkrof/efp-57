import ask from '../utils/ask';
import counter from './counter';

let init;
let validate;

init = () => ask('Enter a string:').then(validate);

validate = (str) => {
  if (str.trim().length === 0) {
    console.log('The string cannot be empty.');
    init();
  } else {
    console.log(counter(str));
  }
};

init();
