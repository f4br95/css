const _ = require("lodash");

const objeto1 = { nome: "teste", age: 27 };

const deletaAtributo = (obj1, propriedade) => {
  const clone = _.cloneDeep(obj1);
  delete clone[propriedade];
  return clone;
};

console.log(deletaAtributo(objeto1, "nome"));
console.log(objeto1);

const foo = [1, 2, 3];
