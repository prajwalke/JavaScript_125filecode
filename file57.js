//map method
/*
const numbers = [3, 4, 5, 6, 7, 8];
const square = function(number) {
  //  return number * number;
};

const squareNumber = numbers.map(number => {
  return number * number;
});
console.log(squareNumber);
*/





/*----------------------------real lyf example ----------------------------------------*/


const users = [
    {firstName:"prajwal", age:18},
    {firstName:"aniket", age:19},
    {firstName:"omkar", age:20},
    {firstName:"abhijit", age:21},
]

const userNames = users.map((user) => {
    return user.firstName;
    
});
console.log(userNames)