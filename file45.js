//arrow function
//Arrow functions allow us to write shorter function syntax:



/*const singHappyBirthday=function() {
    console.log("happy birthday");
  }
  */
//compare the both the code

  const singHappyBirthday=() => {
    console.log("happy birthday");
  }
  singHappyBirthday();
  
/*function SumofTwonumber(number1, number2) {
  // console.log(2+4)
  //return 2+5;
  return number1 + number2; */


  const SumofTwonumber=(number1, number2)=> {

    return number1 + number2;
  }