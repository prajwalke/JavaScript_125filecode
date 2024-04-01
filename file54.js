//callback function

function myFunc2(name) {
    console.log("inside my func 2");
    console.log('your name is ${name}');
}
function myFunc(callback) {
    console.log("hello prajwal welcom to infosys")
  callback("prajwal");
}

myFunc(myFunc2);
