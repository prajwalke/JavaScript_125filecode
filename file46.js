//hoisting

//In JavaScript, a variable can be declared after it has been used.

//In other words; a variable can be used before it has been declared.

//only happen in function decliration program not in function expression 


/*
 hello();

  function hello(){
    console.log("hello word");
 }
 */
console.log(hello);
console.log="hello world"
console.log(hello);