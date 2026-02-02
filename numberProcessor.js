const fs = require("fs");

function sumNumbers(numbers) {
    return numbers.reduce((sum, n) => sum + n, 0);
}

function findMin(numbers) {
    return Math.min(...numbers);
}

function findMax(numbers) {
    return Math.max(...numbers);
}

function average(numbers) {
    return sumNumbers(numbers) / numbers.length;
}

module.exports = {
    sumNumbers,
    findMin,
    findMax,
    average
};