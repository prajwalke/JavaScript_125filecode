/*//Find method

const myArray = ["Hello", "cat", "dog", "lion"];

function isLenght3(string) {
  return string.length === 3;
}

//const ans = isLenght3("dog");
//console.log(ans);
const ans = myArray.find((string)=>string.length===3);
console.log(ans);
*/

const user = [
  { userId: 1, userName: "prajwal" },
  { userId: 2, userName: "empire" },
  { userId: 3, userName: "build" }, 
  { userId: 4, userName: "karega" },
  { userId: 5, userName: "bc" }
];
const myuser = user.find((user) => user.userId === 3);
console.log(myuser);
