//retorna apenas os numeros dentro do array

const foo = [10, 20, "javascript", "palavra", { age: 26 }, [10, 24, 53]];

const retornaNumero = (arr) => arr.filter((e) => typeof e == "number");

console.log(retornaNumero(foo));
