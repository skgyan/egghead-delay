const run = (cb) => {
  setTimeout(() => {
    cb('1s');
    setTimeout(() => {
      cb('2s');
      setTimeout(() => {
        cb('3s');
      }, 1000);
    }, 1000);
  }, 1000);
}

run((time) => {
  console.log(time);
});