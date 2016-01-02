export default (question) => {
  const stdin = process.stdin;
  stdin.resume();
  stdin.setEncoding('utf8');
  console.log(question);

  return new Promise((resolve, reject) => {
    stdin.once('data', (answer) => {
      stdin.pause();
      resolve(answer);
    }).on('error', (err) => {
      reject(err);
    });
  });
};
