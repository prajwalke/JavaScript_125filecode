//loop

//get multiple items using getElement by class name

// aaray like object ---->index, length property
const navItems = document.getElementsByClassName("nav-item"); // Use getElementsByClassName instead of getElementsByTagName
console.log(navItems);

/* we cant use foreach methode to iterate through Html collection 
simple loop

*/

/*------------------------for of loop---------------------------------
for (let i = 0; i < navItems.length; i++) {
  const navItem = navItems[i];
  navItem.style.backgroundColor = "black"; // Use backgroundColor instead of backgroundcolor
  navItem.style.color = "green";
  navItem.style.fontweight = "bold";
}
-------------------------------------------------------------*/

/*------------------------------------------------------------------
for (let navItem of navItems) {
  navItem.style.backgroundColor = "black"; // Use backgroundColor instead of backgroundcolor
  navItem.style.color = "green";
  navItem.style.fontweight = "bold";
}
-----------------------------for each loop ------------------------------------*/

navItems.array.forEach(navItem => {
  navItem.style.backgroundColor = "black"; // Use backgroundColor instead of backgroundcolor
  navItem.style.color = "green";
  navItem.style.fontweight = "bold";
});

//get multiple item using   querySelectorAll

/*
const navItem = document.querySelectorAll("nav-item");
console.log(navItem);
*/
