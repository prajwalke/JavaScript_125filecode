//filter method
const numbers = [1, 2, 3, 4, 5, 6, 7];

const isEven= function(number){
    return number%2 === 0;
}


const evenNUmbers = numbers.filter(isEven);
console.log(evenNUmbers)

// same for odd number 
