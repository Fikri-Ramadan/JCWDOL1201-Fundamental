// nomor 2 => buat lah 5 function dengan parameter tinggi untuk menciptakan segitia bintang dengan menggunakan looping

// expected output :
// *
// **
// ***
// ****

//  ****
//   ***
//    **
//     *

//     *
//    **
//   ***
//  ****

//  ****
//  ***
//  **
//  *

//      *
//     * *
//    * * *
//   * * * *

const segitiga1 = (height) => {
  let result = '';

  for (let i = 0; i < height; i++) {
    for (let j = 0; j <= i; j++) {
      result += '*';
    }
    result += '\n';
  }

  return result;
};

console.log(segitiga1(4));

const segitiga2 = (height) => {
  let result = '';

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < height; j++) {
      if (j < i) {
        result += ' ';
      } else {
        result += '*';
      }
    }
    result += '\n';
  }

  return result;
};

console.log(segitiga2(4));

const segitiga3 = (height) => {
  let result = '';

  for (let i = height; i >= 0; i--) {
    for (let j = 0; j < height; j++) {
      if (j < i) {
        result += ' ';
      } else {
        result += '*';
      }
    }
    result += '\n';
  }

  return result;
};

console.log(segitiga3(4));

const segitiga4 = (height) => {
  let result = '';

  for (let i = height; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      result += '*';
    }
    result += '\n';
  }

  return result;
};

console.log(segitiga4(4));

const segitiga5 = (height) => {
  // jika height 4

  doubleHeight = height * 2 + 1; // -> 9
  let mid = Math.round(doubleHeight / 2); // -> 5
  let left = mid; // -> 5
  let right = mid; // -> 5

  let result = '';

  for (let i = 1; i <= height; i++) {
    let arr = new Array(doubleHeight);
    // ['','','','','','','','','']

    // jika i = ganjil, maka '*' mulai dari mid
    if (i % 2 === 1) {
      for (let j = 1; j <= arr.length; j++) {
        if (j >= left && j <= right) {
          arr[j - 1] = j % 2 === 0 ? ' ' : '*';
        } else {
          arr[j - 1] = ' ';
        }
      }
    }

    // jika i = genap, maka '*' mulai setelah dan sebelum mid
    else {
      for (let j = 1; j <= arr.length; j++) {
        if (j >= left && j <= right) {
          arr[j - 1] = j % 2 === 0 ? '*' : ' ';
        } else {
          arr[j - 1] = ' ';
        }
      }
    }

    left--;
    right++;
    result += arr.join('') + '\n'; // convert array hasil looping menjadi string + new line
  }

  return result;
};

console.log(segitiga5(4));
