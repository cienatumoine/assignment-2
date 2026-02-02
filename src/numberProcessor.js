function sumNumbers(arr) {
  return arr.reduce((sum, n) => sum + n, 0);
}

function findMin(arr) {
  return Math.min(...arr);
}

function findMax(arr) {
  return Math.max(...arr);
}

function average(arr) {
  return sumNumbers(arr) / arr.length;
}

module.exports = { sumNumbers, findMin, findMax, average };