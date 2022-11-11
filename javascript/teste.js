const carrinho = [
  { nome: "Laptop", preco: 1500, fragil: true },
  { nome: "iPhone", preco: 8000, fragil: true },
  { nome: "bike", preco: 450, fragil: false },
  { nome: "caderno", preco: 25, fragil: false },
  { nome: "gpu", preco: 2500, fragil: false },
  { nome: "vidro", preco: 250, fragil: true },
];
const obj = { nome: "Laptop", preco: 1500, fragil: true };

const filtraobj = carrinho
  .filter((p) => p.preco >= 1500)

  .filter((p) => p.fragil == true);

const { nome: n, preco: price } = obj;
console.log(n, price);
