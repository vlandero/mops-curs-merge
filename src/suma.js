
function calculateSum(numbers) {
    if (typeof a === 'number' && typeof b === 'number') throw Error("Invalid input");
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(calculateSum([5, 2]));
