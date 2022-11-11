function rand(num) {
  (min = 0), (max = 10);

  const value = Math.random() * (max - min) + min;

  if (num < 10) {
    if (Math.floor(value) == num)
      return `{Parabéns! O numero sorteado foi o ${num}}`;
    else return `{Que pena! O numero sorteado foi o ${Math.floor(value)}}`;
  }
}

console.log(rand(5));
