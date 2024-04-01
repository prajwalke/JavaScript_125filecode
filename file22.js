/*---------For loop in array----------*/
let fruits = ["apple", "mango", "cheeku", "banana", "greps"];
/*for(let i=0; i<=9;i++)
{
console.log(i);
}

*/
/*

console.log(fruit.length);
console.log(fruit[2]);
console.log(fruit[fruit.length-1]);
*/
let fruits2 = [];

for (let i = 0; i < fruits.length; i++) {
  //console.log(fruits[i].toUpperCase());
  fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);
