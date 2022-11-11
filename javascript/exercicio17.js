const sum = (arr) => arr.reduce((soma, atual) => soma + atual);

function funcMedia(fn, arr) {
  return fn(arr) / arr.length;
}
// console.log(funcMedia(sum, [2, 3, 5, 2]));

console.log(funcMedia(sum, [1, 2, 3, 4, 5]));
