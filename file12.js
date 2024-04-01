// nested if else

// wining number 11
// 11 your guess is right
//20 to high


let winingNumber= 11;
let userGuess = +prompt("Guess a number");

console.log(typeof userGuess, userGuess);

if(userGuess=== winingNumber)
{
    console.log("your guess is right you won my heart");
}
else{
    if(userGuess<winningNumber){
        console.log("too low!!!");
    }
    else{
        console.log("TO high");
    }

}