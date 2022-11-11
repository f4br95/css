const logicadoCaralho = (numero, minimo, maximo, inclusivo = false) => {
  if (inclusivo == true) {
    if (numero >= minimo && numero <= maximo) return true;
    else return false;
  } else {
    if (minimo < numero && maximo > numero) return true;
    else return false;
  }
};

console.log(logicadoCaralho(16, 100, 160));
