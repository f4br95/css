const somaCustos = (objeto) =>
  objeto
    .map((e) => e.preco)
    .reduce(function (soma, atual) {
      return soma + atual;
    });

function somarCustos(objeto) {
  return objeto.map((e) => e.preco).reduce((soma, atual) => soma + atual);
}

console.log(
  somarCustos([
    { nome: "galaxy s20", preco: 3599.99 },
    { nome: "macbook pro", preco: 30999.9 },
  ])
);
