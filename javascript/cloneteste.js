const _ = require("lodash");

const people = { name: "jim", age: 25, endereco: { rua: "avenue 10th" } };

const clone_people = _.cloneDeep(people);

delete clone_people.endereco.rua;

// { name: 'jim', age: 25 }
const foo = [5, 25, 40];
console.log(_.last(foo));
