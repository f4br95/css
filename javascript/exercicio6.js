const receberDado = (variavel) => {
  if (typeof variavel == "number") return variavel * -1;
  else if (typeof variavel == "boolean") return !variavel;
  else
    return (
      "booleano ou número esperados, mas o parametro é do tipo " +
      typeof variavel
    );
};

console.log(receberDado("true"));
