function calculateSum(a, b) {
    if (typeof a === 'number' && typeof b === 'number') throw Error("Invalid input");
    return a + b;
}

console.log(calculateSum(5, 2));
