//Default Parameter

function addTwo(a, b) {
    if (typeof b === "undefined") {
        b = 0;
    }
    return a + b;
}

const ans = addTwo(5, 4);
console.log(ans);


















