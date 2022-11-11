const func = (char, string) => {
  let count = 0;
  for (let a = 0; a < string.length; a++) {
    if (string[a] == char) count++; // if(string.charAt(a) == char) count ++;
  }
  return count;
};

console.log(func("e", "recebere"));
