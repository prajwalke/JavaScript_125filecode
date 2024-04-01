//function inside function 
//In JavaScript, Functions within another function are called “Nested function.

const app = () => {
    const myFun = () => {
        console.log("hello from myFun");
    }

    const addTwo = (num1, num2) => {
        return num1 + num2;
    }

    const mul = (num1, num2) => {
        return num1 * num2;
    }

    console.log("inside app");
    myFun();
    console.log(addTwo(2,3));
    console.log(mul(2,3));
}

app();










