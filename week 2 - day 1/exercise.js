// Exercise 1
// 1. Write a function to get the lowest, highest and average value in
//    the array (with and without sort function).

// without arr sort function
const averageArr = (arr) => {
  let sum = 0;
  arr.forEach((item) => (sum += item));
  return sum / arr.length;
};

const lowestOnArr = (arr) => {
  let lowest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < lowest) {
      lowest = arr[i];
    }
  }

  return lowest;
};

const highestOnArr = (arr) => {
  let highest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > highest) {
      highest = arr[i];
    }
  }

  return highest;
};

let arr = [12, 5, 23, 18, 4, 45, 32];

const average = averageArr(arr);
const lowest = lowestOnArr(arr);
const highest = highestOnArr(arr);

console.log(average.toFixed(1));

console.log('lowest ->', lowest);
console.log('highest ->', highest);

// with arr sort func
arr.sort((a, b) => a - b);
console.log('lowest ->', arr[0]);
console.log('highest ->', arr[arr.length - 1]);

// ===========================================================================

// 2. Write a function that takes an array of words and returns a string
//    by concatenating the words in the array, separated by commas and -
//    the last word - by an 'and'.
const arrToString = (arr) => {
  arr[arr.length - 1] = ` and ${arr[arr.length - 1]}`;
  return arr.join(',');
};

arr = ['apple', 'banana', 'cherry', 'date'];

let arrResult = arrToString(arr);

console.log(arr, '->', arrResult);

// ===========================================================================

// 3. Write a function to split a string and convert it into an array of words
const stringToArr = (string) => {
  return string.split(' ');
};

let words = 'Hello World';

let result = stringToArr(words);

console.log(words, '->', result);

// ===========================================================================

// 4. Write a function to calculate each element in the same position from two
//    arrays of integer. Assume both arrays are of the same length.
const sumTwoArr = () => {
  return arr1.map((item, index) => item + arr2[index]);
};

let arr1 = [1, 2, 3];
let arr2 = [3, 2, 1];

arrResult = sumTwoArr(arr1, arr2);

console.log(arr1, '+', arr2, '->', arrResult);

// ===========================================================================

// 5. Write a function that adds an element to the end of an array. However, the
//    element should only be added if it is not already in the array.
const addNewElementOnArr = (arr, newElement) => {
  if (arr.includes(newElement)) {
    return [...arr];
  } else {
    return [...arr, newElement];
  }
};

arr = [1, 2, 3, 4];
const newElement = 7;

arrResult = addNewElementOnArr(arr, newElement);

console.log(arr, '->', arrResult);

// ===========================================================================

// Exercise 2
// 1. Write a function to remove all odd numbers in an array and return a new
//    array that contains even numbers only
const removeOdds = (arr) => {
  return arr.filter((item) => item % 2 === 0);
};

arr = [1, 2, 3, 4, 5, 6];

arrResult = removeOdds(arr);

console.log(arr, '->', arrResult);

// ===========================================================================

// 2. Write a function to insert multiple given integer (not an array) to an
//    array and have a maximum size input. The array can only have a maximum size
//    from a given input. (if the maximum size of the given input is 5 than the
//    array can only contain 5 elements).
const createArr = (maxSize, ...numbers) => {
  if (numbers.length > maxSize) {
    return numbers.slice(0, maxSize);
  } else {
    return numbers;
  }
};

const maxSize = 5;
arrResult = createArr(maxSize, 5, 10, 24, 3, 6, 7, 8);

console.log(arrResult);

// ===========================================================================

// 3. Write a function that will combine 2 given array into one array
const concatArr = (arr1, arr2) => {
  return [...arr1, ...arr2];
};

arr1 = [1, 2, 3];
arr2 = [4, 5, 6];

arrResult = concatArr(arr1, arr2);

console.log(arr1, '+', arr2, '->', arrResult);

// ===========================================================================

// 4. Write a function to find duplicate values in an array
const findDuplicates = (arr) => {
  newArr = [];
  let index = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        newArr[index] = arr[i];
        index++;
      }
    }
  }
  return [...new Set(newArr)];
};

arr = [1, 2, 2, 2, 3, 3, 4, 5, 5];
arrResult = findDuplicates(arr);

console.log(arr, '->', arrResult);

// ===========================================================================

// 5. Write a function to find the difference in 2 given array
const findDiffBetweenTwoArr = (arr1, arr2) => {
  newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
    if (!arr1.includes(arr2[i])) {
      newArr.push(arr2[i]);
    }
  }

  return newArr;
};

arr1 = [1, 2, 3, 4, 5];
arr2 = [3, 4, 5, 6, 7];

arrResult = findDiffBetweenTwoArr(arr1, arr2);

console.log(arr1, arr2, '->', arrResult);

// ===========================================================================

// Exercise 3
// 1. Based on the array below write a function that will return primitive data
//    types only.
const filterIntoPrimitive = (arr) => {
  let newArr = [];

  arr.forEach((item) => {
    if (typeof item !== 'object') {
      newArr.push(item);
    }
  });

  return newArr;
};

arr = [1, [], undefined, {}, 'string', {}, []];
arrResult = filterIntoPrimitive(arr);

console.log(arr, '->', arrResult);

// ===========================================================================

// 2. Write a function from a given array of numbers and return the second
//    smallest number
const secondSmallest = (arr) => {
  return arr.sort((a, b) => a - b)[1];
};

arr = [5, 3, 1, 7, 2, 6];
result = secondSmallest(arr);

console.log(arr, '->', result);

// ===========================================================================

// 3. Write a function from a given array of mixed data types and return the
//    sum of all the number
const sumNumberOnly = (arr) => {
  let sum = 0;

  arr.forEach((item) => {
    if (typeof item === 'number') {
      sum += item;
    }
  });

  return sum;
};

arr = ['3', 1, 'string', null, false, undefined, 2];
result = sumNumberOnly(arr);

console.log(arr, '->', result);

// ===========================================================================

// 4. Write a function from the below array of number that will return sum of
//    duplicate values.
const sumOfDuplicate = (arr) => {
  let sum = 0;
  let dupArr = findDuplicates(arr);

  arr.forEach((item) => {
    dupArr.forEach((dupItem) => {
      if (item === dupItem) {
        sum += item;
      }
    });
  });

  return sum;
};

arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];

result = sumOfDuplicate(arr);

console.log(arr, '->', result);

// ===========================================================================

// 5. Write a game of rock, paper, scissor function that will return 'Win' or
//    'Lose'. The function will randomly pick between rock, paper, or scissor.
const suit = ['rock', 'paper', 'scissor'];

const getRandomSuit = () => {
  return suit[Math.floor(Math.random() * 3)];
};

const compareSuit = (playerPick, randomPick) => {
  if (playerPick === 'rock') {
    if (randomPick === 'scissor') {
      return 'Menang';
    } else if (playerPick === randomPick) {
      return 'Seri';
    } else {
      return 'Kalah';
    }
  }

  if (playerPick === 'paper') {
    if (randomPick === 'rock') {
      return 'Menang';
    } else if (playerPick === randomPick) {
      return 'Seri';
    } else {
      return 'Kalah';
    }
  }

  if (playerPick === 'scissor') {
    if (randomPick === 'paper') {
      return 'Menang';
    } else if (playerPick === randomPick) {
      return 'Seri';
    } else {
      return 'Kalah';
    }
  }
};

let pick = 'rock';
let randomPick = getRandomSuit();
result = compareSuit(pick, randomPick);

console.log(pick, 'vs', `${randomPick}(random)`, '->', result);
