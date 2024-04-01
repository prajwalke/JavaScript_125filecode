// sort method
// Ascii table
// char: ascii value

/*
const number = [55, 59, 966, 665, 66, 859, 7594, 3586, 89585, 555, 2]
number.sort()

const userNames = ['prajwal', 'omkaar', 'anikejoei', 'diuandiand'
]
userNames.sort()
console.log(userNames)

const number = [55, 59, 966, 665, 66, 859, 7594, 3586, 89585, 555, 2];
number.sort((a, b) => {
    return a - b;
});
console.log(number);
*/

const products = [
  { productId: 1, productName: "mobile", price: 120000 },
  { productId: 2, productName: "laptop", price: 120000 },
  { productId: 3, productName: "Tanmay", price: 6000 },
  { productId: 4, productName: "iphone", price: 155000 }
];

const lowtoHigh = products.slice(0).sort((a, b) => {
  return a.price - b.price;
});
const Hightolow = products.slice(0).sort((a, b) => {
  return b.price - a.price;
});

console.log(products);
