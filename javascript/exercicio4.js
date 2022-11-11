const meses = [
  "janeiro",

  "fevereiro",

  "março",

  "abril",

  "maio",

  "junho",

  "julho",

  "agosto",

  "setembro",

  "outubro",

  "novembro",

  "dezembro",
];

const ano = (num) => "Mes informado é o " + meses[num - 1];

// console.log(ano(4));

const mesesmap = new Map([
  [1, "janeiro"],
  [2, "fevereiro"],
  [3, "marco"],
  [4, "abril"],
  [5, "maio"],
  [6, "junho"],
  [7, "julho"],
  [8, "agosto"],
  [9, "setembro"],
  [10, "outubro"],
  [11, "novembro"],
  [12, "dezembro"],
]);

const mesCalculator = (num) => "Mes informado é o " + mesesmap.get(num);
console.log(mesCalculator(5));
