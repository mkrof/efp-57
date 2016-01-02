import ask from '../utils/ask';
import counter from './counter';

const init = () => {
  ask(`What's the input string?`, (str) => {
    if (str.trim().length === 0) {
      console.log('Enter something...');
      init();
    } else {
      console.log(counter(str));
    }
  });
};

init();
