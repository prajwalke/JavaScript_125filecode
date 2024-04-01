// every mrthod
/*
const number = [2, 4, 6, 8, 10];


const ans = number.every(number => number % 2 === 0);

console.log(ans);
*/

/*----------real lyf example----------------------*/

const products = [
  { productId: 1, productName: "mobile", price: 120000 },
  { productId: 2, productName: "laptop", price: 120000 },
  { productId: 3, productName: "Tanmay", price: 6000 },
  { productId: 4, productName: "iphone", price: 155000 },
];

// check every product < 30000

const ans = products.every(product => product.price < 30000);

console.log(ans);

