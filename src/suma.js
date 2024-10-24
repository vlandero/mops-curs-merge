function calculateSum(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(calculateSum([5, 2]));
