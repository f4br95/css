const matematica = (num1, num2) => {
  if (typeof num1 == "number" && typeof num2 == "number") {
    let num3 = num1;
    for (let i = 0; i < num2 - 1; i++) {
      num3 += num1;
    }
    // num3 = num1;
    return num3;
  }
};
const calc = (n1, n2) =>
  typeof n1 === "number" && typeof n2 === "number" && n1 >= 0 && n2 >= 0
    ? Array(n1)
        .fill(n2)
        .reduce((a, b) => a + b)
    : "Invalid input";

console.log(matematica(0, 7));
