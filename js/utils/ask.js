export default (question, cb) => {
  const stdin = process.stdin;
  stdin.resume();
  stdin.setEncoding('utf8');

  console.log(question);

  stdin.on('data', (...args) => {
    stdin.pause();
    cb.apply(null, args);
  });
};
