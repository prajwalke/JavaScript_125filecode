
// static list vs live list

// queryselectall hamein static list degi
// getElement hame live list degi 


const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");

const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";

ul.append(sixthLi);
console.log(listItems);
