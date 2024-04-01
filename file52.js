//rest parameter
/*
function myFunc(a, b, ...c) {
  console.log("a id ${a}");
  console.log("b id ${b}");
  console.log("c is ", c);
}
myFunc(5, 5, 6, 6, 5, 9);
*/
function addAll(...numbers) {
  let total = 0;
  for(let number of numbers) {
    total = total + number;
  }
  return total;
}
const ans = addAll(4, 5, 5, 6, 5);
console.log(ans);
