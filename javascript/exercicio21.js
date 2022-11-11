function chars(string) {
  // it breaks a string into a array of characters
  return Array.from(String(string));
}

const blanks = (var1) => {
  //Receive a string and return how many blank spaces are in the string, meaning the amount of words
  let count = 0;
  for (a = 0; a < var1.length; a++) {
    if (var1[a] == " ") count++;
  }
  return count + 1;
};

console.log(blanks("string aleatoria"));

function contaPalavras(frase) {
  const palavras = frase.split(" ");
  return palavras.length;
}
