//Function
//how to create function
//by function keyword
function singHappyBirthday() {
  console.log("happy birthday");
}
function SumofTwonumber(number1, number2) {
  // console.log(2+4)
  //return 2+5;
  return number1 + number2;
}
//const returnedValue = twoplusfour();
const returnedValue = SumofTwonumber();
console.log(returnedValue);
/*--------------------------------------------*/
//odd or even
//input: 1 number
//ouput :true or false
/*

function isEven(number){
    if(number %2===0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(111));

*/
/*---------------------------------------------- */
// upper 6 line of code in one line

//  console.log(10 %2===0);
/*---------------------------------------------*/

/* question function
input: string
output: Firstclass 

*/

/*
function firstchar(anyString) {
  return anyString[0];
}
console.log(firstchar("hjbfsehbdiua"));

*/

/*-------------------------------------------*/

/**
 * input:array,target(number)
 * output:index of target if target present in array
 */
function findTarget(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return-1;
}
const myArray=[1,2,52,5,]
const ans =findTarget(myArray,5);
console.log(ans);

/*
THIS IS FUNCTION DECLERATION
*/