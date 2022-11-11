const completa = (param, param2) => Array(param2).fill(param);

console.log(completa("teste", 5));

const complete = (param, param2) => {
  const foo = [];
  for (let i = 0; i < param2; i++) {
    foo.push(param);
  }
  return foo;
};

console.log(complete("teste", 3));
