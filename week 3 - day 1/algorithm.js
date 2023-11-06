// Search

// Linear Search
const linearSearch = (arr = [], x) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }

  return -1;
};

console.log(linearSearch([2, 3, 41, 23], 41));

// Binary Search
const binarySearch = (arr = [], lowest, range, x) => {
  if (range >= lowest) {
    let mid = lowest + Math.floor(range - lowest) / 2;

    if (arr[mid] === x) {
      return mid;
    } else if (arr[mid] > x) {
      return binarySearch(arr, lowest, mid - 1, x);
    }
    return binarySearch(arr, mid + 1, range, x);
  }

  return -1;
};

let arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const x = 57;
console.log(binarySearch(arr, 0, arr.length - 1, x));

// Bubble Sort
const bubbleSort = (arr = []) => {
  while (arr.length > 1) {
    let counter = 0;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        counter++;
      }
    }

    if (counter === 0) {
      break;
    }
  }

  return arr;
};

arr = [5, 3, 8, 4, 6];
console.log(bubbleSort(arr));

// Selection Sort
const selectionSort = (arr = []) => {
  let min;

  for (let i = 0; i < arr.length; i++) {
    min = i;
    
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }

    if (i != min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
};

arr = [29, 72, 98, 13, 87, 66, 52, 51, 36];
console.log(selectionSort(arr));
