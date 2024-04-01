//importatn array method
//foreach
//map
//filter
//reduce

const numbers = [5, 6, 8, 7];

function myFunc(number, index) {
  // console.log(`index is ${index} number is ${number}`);
  // console.log(`${number}*2 = ${number * 2}`);
}
/*
for (let i = 0; i < numbers.length; i++){

    myFunc(numbers[i], i);
}
*/
/*
//numbers.forEach(myFunc);
numbers.forEach(function(number, index) {
  console.log(`index is ${index} number is ${number}`);
});

numbers.forEach(function(number) {
  console.log(number * 3);
});
*/


/*---------------------------------------------------------*/
// real life example //

const users = [
    {firstName:"prajwal", age:18},
    {firstName:"aniket", age:19},
    {firstName:"omkar", age:20},
    {firstName:"abhijit", age:21},
]
/*
users.forEach(function (user) {
    console.log(user.firstName);
})
*/
/*-----------with arrow function */


users.forEach((user ,index) => {
    console.log(user.firstName);
})