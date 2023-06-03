/**
 * @param {number[]} numbers
 * @returns {number[][]}
 */
function getCombinations(numbers) {
  const result = [[]];
  for (let i = 0; i < numbers.length; i++) {
    const currentLength = result.length;
    for (let j = 0; j < currentLength; j++) {
      result.push([...result[j], numbers[i]]);
    }
  }
  result.shift();
  return result;
}

/**
 * @param {number[]} numbers
 * @return {number}
 */
function calculSum(numbers) {
  let response = 0;
  numbers.forEach((number) => {
    response += number;
  });
  return response;
}

/**
 *
 * @param {number[]} numbers
 * @param {number} result
 * @return {number[][]}
 */
function sum(numbers, result) {
  let combinations = getCombinations(numbers);
  let response = [];
  combinations.forEach((combination) => {
    if (calculSum(combination) == result) {
      response.push(combination);
    }
  });
  return response;
}

const numbers = [1, 2, 3, 4];
console.log(sum(numbers, 6));
