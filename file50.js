/**
 * Block scope vs function Scope
 * let and Const are Block scope
 * var is function scope
 */
// if we used let and const that time we only acces the ["{}"blog.]
// parameter inside the blog if try to get outside the blog we grt error

/*
{
    let firstname="prajwal";
    console.log(firstname);
}
{
    const firstname="Aniket";
    console.log(firstname);

}
/*const first_name ="dhanshree";
console.log(firstname);
*/
/*{
    var firstname="shrddha";
}
{
    var firstname="omkar";
}
{
console.log(firstname);
}
//i case of var we access the parameter outside the blog

if(true){
    let firstname="pranav";
    console.log(firstname);
}
*/
function myApp() {
  if (true) {
    var firstname = "pranav";
    console.log(firstname);
  }
  if(true){
  console.log(firstname);
  }
  console.log(firstname);
}
myApp();
