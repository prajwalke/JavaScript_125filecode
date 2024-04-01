// Lexical scope
//to resolve the variable names when a function is created inside another function.


function myApp(){
    const mhyVar ="value1";

    function myFunc(){
       // const myVar="value5";
        console.log("INSIDE MY FUNCTION")
    }
        const myFunc2  =function(){}
        const myFunc3 =()=>{}
        console.log(myVar);
        myFunc();

    }
    myApp();
