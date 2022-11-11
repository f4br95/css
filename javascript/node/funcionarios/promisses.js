let a = 0;
let b = 0;

function recebe(a) {
  while (b < 3) {
    a++;
    console.log(a);
    b++;
  }
  return a;
}

recebe(a);

console.log(a);
