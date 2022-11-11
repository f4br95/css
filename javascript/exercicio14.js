const func = (arr) =>
  arr.filter((e) => {
    if (e % 2 == 0 && arr.indexOf(e) % 2 == 0) return e;
  });

console.log(func([10, 70, 22, 43]));
