//object destructing 

const band ={
    bandName:"ciggrate After sex",
    famousSong:"apocalypse",
    year:1980,
    anotherFamousSong:"sweet",

};
/*
const bandName= band.bandName; 
const famousSong= band.famousSong; 

console.log(bandName, famousSong);
 */

let {bandName,famousSong,...restprops}=band;
console.log(bandName); //1 line me 4 line ka code 
console.log(restprops);