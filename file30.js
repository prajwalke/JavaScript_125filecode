//---------how to iterate object ------------//

//const key ="email";
const person = {
  name: "Prajwal",
  age: 22,
  "persion hobbies": ["guitar", "cooking", "books"]
};
//--------for in loop-----------//
//--------object key------------//
/*for (let key in person) {
  console.log(person[key]);

  console.log('${key} :${person[key]}');
  console.log(key, person[key]);
}
*/
///----------object case--------------//

//    console.log(Object.keys(person));


for(let key of Object.keys(person))
{
    console.log(person[key]); 
}
