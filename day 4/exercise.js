// create triangle pattern
const height = 4;

const makeTriangle = (height) => {
  let triangle = '';
  let counter = 1;

  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= i; j++) {
      if (counter < 10) {
        triangle += '0';
      }
      triangle += `${counter++} `;
    }
    if (i !== height) {
      triangle += '\n';
    }
  }

  return triangle;
};

console.log(makeTriangle(height));

// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz",
// multiples of 3 and 5 with "FizzBuzz".
const fizzBuzz = (n) => {
  const fizzBuzz = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fizzBuzz.push('FizzBuzz');
    } else if (i % 3 === 0) {
      fizzBuzz.push('Fizz');
    } else if (i % 5 === 0) {
      fizzBuzz.push('Buzz');
    } else {
      fizzBuzz.push(i);
    }
  }

  return fizzBuzz.join(', ');
};

const n = 15;

console.log(fizzBuzz(15));

// Create a function to calculate Body Mass Index (BMI)
// Formula : BMI = weight (kg) / (height (meter))^2
// Parameters : weight & height
const calcBodyMassIndex = (weight, height) => {
  const BMI = weight / height ** 2;

  if (BMI < 18.5) {
    return 'less weight';
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    return 'ideal';
  } else if (BMI >= 15 && BMI <= 29.9) {
    return 'overweight';
    30.0 - 39.9;
  } else if (BMI >= 30 && BMI <= 39.9) {
    return 'very overweight';
  } else {
    return 'obesity';
  }
};

console.log(calcBodyMassIndex(55, 1.71));

// Write a function to remove all odd numbers in an array
const filterEvenOnly = (arr) => {
  return arr.filter((item) => item % 2 === 0);
};

const evenOddNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = filterEvenOnly(evenOddNumbers);

console.log(`${evenOddNumbers} -> ${evenNumbers}`);

// Write a function to split a string and convert it into an array of words
const convertToArr = (string) => {
  return string.split(' ');
};

const word = 'Hello World';
const arrOfWord = convertToArr(word);
console.log(`${word} ->`, arrOfWord);
