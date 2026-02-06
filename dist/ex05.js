"use strict";
// Create a function called sumAllNumbers.
// This function should accept any number of numbers using a rest parameter.
// It should return the sum of all the numbers passed to it.
function sumAllNumbers(...numbers) {
    const initialValue = 0;
    const totalValue = numbers.reduce((total, crr) => total + crr, initialValue);
    return totalValue;
}
console.log(sumAllNumbers(1, 2, 3, 4, 5)); // Expected output: 15
