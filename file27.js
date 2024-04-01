//---------array disructuring---------------//

const myArray = ["value1","value2"];

/*  
let myvar1 = myArray[0];
let myvar2 = myArray[1];
console.log("value of myArrar1", myvar1);
console.log("value of myArrar2", myvar2);

*/

let[myvar1, myvar2,...myNewArray] =myArray;
console.log("value of myArrar1", myvar1);
console.log("value of myArrar2", myvar2);
console.log(myNewArray);

