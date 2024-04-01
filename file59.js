// reduce method
/*
const number = [1, 2, 3, 5, 6, 8, 5];

// Aim: sum of all numbers in array
const sum = number.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(sum);

/*


|---------------------------------------|
|Accumulator ||  currentvalue || return|
|---------------------------------------|
|   1        ||     2         ||      3 |
|   3        ||     3         ||      6 |
|   6        ||     5         ||      11|
|   11       ||     6         ||      17|
|   17       ||     8         ||      25|
|   25       ||     5         ||      30|
|---------------------------------------|


    */
/*--------real life example ---------*/
const userCart = [
  { productId: 1, productName: "mobile", price: 120000 },
  { productId: 2, productName: "laptop", price: 120000 },
  { productId: 3, productName: "Tanmay", price: 6000 },
  { productId: 4, productName: "iphone", price: 155000 }
];

const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
  return currentProduct.price + totalPrice;
}, 0);

console.log(totalAmount);

