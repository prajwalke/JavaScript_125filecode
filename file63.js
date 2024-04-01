//some method


const numbers = [3, 4, 5, 6, 8];

//const ans = numbers.some(number => number % 2 === 0);
//console.log(ans);

const userCart = [
  { productId: 1, productName: "mobile", price: 120000 },
  { productId: 2, productName: "laptop", price: 120000 },
  { productId: 3, productName: "Tanmay", price: 6000 },
  { productId: 4, productName: "iphone", price: 155000 },
];
const ans=userCart.some((cartItem) => cartItem.price > 100000);
console.log(ans)