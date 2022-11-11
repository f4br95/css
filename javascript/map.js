const alunos = [
  { nome: "Joao", nota: 7, bolsista: false },
  { nome: "Maria", nota: 8, bolsista: true },
  { nome: "Marta", nota: 5, bolsista: false },
  { nome: "Marcel", nota: 8, bolsista: false },
];

const resultado1 = alunos
  .map((e) => e.bolsista)
  .reduce((resultado, bolsista) => resultado && bolsista);

const algumBolsista = (resultado, bolsistas) => resultado || bolsistas;

console.log(alunos.map((e) => e.bolsista).reduce(algumBolsista));
