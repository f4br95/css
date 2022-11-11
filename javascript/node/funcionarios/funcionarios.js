const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

const chinese = (e) => e.pais === "China";
const woman = (e) => e.genero === "F";
const minorSalary = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual;
};

axios.get(url).then((response) => {
  const funcionarios = response.data;
  const funcionarioResultante = funcionarios
    .filter(woman)
    .filter(chinese)
    .reduce(minorSalary);

  console.log(funcionarioResultante);
  return funcionarioResultante;
});
