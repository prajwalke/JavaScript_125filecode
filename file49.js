// lexical scope

const myVar ="value1";
function myApp(){

    function myFunc(){
        const myFunc2=()=>{
            console.log("inside my function" ,myVar);
        }
        myFunc2();
    }
    console.log(myVar);
    myFunc();

}
myApp();
