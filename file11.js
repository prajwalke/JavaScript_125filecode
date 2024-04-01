//and or operator 





let firstName ="prajwal";
//let firstName ="Prajwal";
let age = 22;
 
/*

if(firstName[0] == "P"){
    console.log("your name start with p")
 }
 if(age > 18){
    console.log("you are above 18")
 }


 
 */
if(firstName[0]==="P" && age>18)
{
console.log("Nmae start with P and age is above 18");
}
else{
    console.log("inside else")
}



if(firstName[0] || "P" && age>18)
{
console.log("Nmae start with P and age is above 18");
}
else{
    console.log("inside else")
}



