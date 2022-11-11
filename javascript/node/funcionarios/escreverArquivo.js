const objeto = {
  nome: "Fabrício",
  idade: 26.9,
  nascimento: "06/12/1995",
};

const obj2json = JSON.stringify(objeto); //converte um objeto para JSON

console.log(obj2json);

const json2obj = JSON.parse(obj2json); //converte um JSON para objeto

console.log(json2obj.nome);

const fs = require("fs");

fs.writeFile(
  __dirname + "/arquivoGerado.json",
  JSON.stringify(objeto),
  (err) => {
    console.log(err || "Arquivo criado!!");
  }
); /*cria um arquivo no __dirname + /nome.formato que é o diretorio atual, com o nome e formato do arquivo. 
O segundo parametro é o conteudo do arquivo, que pode ser um texto json convertido de um objeto ou uma string... etc*/
