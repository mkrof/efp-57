import ask from '../utils/ask';
import counter from './counter';

ask(`What's the input string?`, (str) => {
  console.log(counter(str));
});
