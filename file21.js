/*-------------primitive vs reference data types-------------*/


let num1 =6;
let num2= num1;
console.log("value num is", num1);
console.log("value num is", num2);
num1++;
console.log("after incrementing num1")
console.log("value num is", num1);
console.log("value num is", num2);



/*---------Reference array--------*/


// -------------AArya-------//

let array1 = ["item1","item2"];
let onemoreArray =["item5","item6"];
//let array2 = array1;
let array2 =array1.slice(0).concat("item3","item4");
array1.push("item3")
//console.log("array1","array1");
//console.log("array1","array1");
console.log("array1");
console.log("array2");
console.log(array1===array2);
