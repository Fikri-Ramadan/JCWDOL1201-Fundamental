// Exercise 1
const compareTwoObj = (obj1, obj2) => {
  const obj1Length = Object.entries(obj1).length;
  const obj2Length = Object.entries(obj2).length;

  if (obj1Length !== obj2Length) {
    return false;
  }

  for (let key in obj1) {
    if (obj1[key] != obj2[key]) {
      return false;
    }
  }
  return true;
};

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  a: 1,
  b: 2,
};

console.log(obj1, '==', obj2, compareTwoObj(obj1, obj2));

// ===================================================================
// Exercise 2
const getIntersectionObjects = (obj1, obj2) => {
  const objResult = {};

  for (let item of Object.keys(obj1)) {
    if (Object.keys(obj2).includes(item) && obj1[item] === obj2[item]) {
      objResult[item] = obj1[item];
    }
  }

  return objResult;
};

obj1 = { a: 1, b: 2 };
obj2 = { a: 1, c: 3 };

console.log(obj1, obj2, '->', getIntersectionObjects(obj1, obj2));

// ===================================================================
// Exercise 3
const concatAndRemoveDup = (arr1 = [], arr2 = []) => {
  for (let item of arr1) {
    const index = arr2.findIndex((arr2Item) =>
      objIsEquals(Object.entries(arr2Item), Object.entries(item))
    );
    if (index != -1) {
      arr2.splice(index, 1);
    }
  }

  return [...arr1, ...arr2];
};

const objIsEquals = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

let arr1 = [
  { name: 'Student 1', email: 'student1@mail.com' },
  { name: 'Student 2', email: 'student2@mail.com' },
];

let arr2 = [
  { name: 'Student 1', email: 'student1@mail.com' },
  { name: 'Student 3', email: 'student3@mail.com' },
];

console.log(concatAndRemoveDup(arr1, arr2));

// ===================================================================
// Exercise 4
const switchKeyValue = (arr) => {
  const newArr = [];

  for (let item of arr) {
    const newObj = {};
    for (let key in item) {
      let value = item[key];

      newObj[value] = key;
    }
    newArr.push(newObj);
  }

  return newArr;
};

const arrObj = [
  { name: 'David', age: 20 },
  { name: 'a', age: 18, email: 's@gmail.com' },
];

console.log(arrObj, '->', switchKeyValue(arrObj));

// ===================================================================
// Exercise 5
let stringResult = '';
const n = 5;

const factorialNumber = (n, result = 1) => {
  stringResult += `${n}`;
  if (n > 1) {
    stringResult += ' x ';
  }

  if (n > 1) {
    return factorialNumber(n - 1, (result *= n));
  }

  return result;
};

let result = factorialNumber(n);

console.log(`${n}!`, '->', stringResult, '=', result);

// ===================================================================
// Exercise 6
console.log();
console.log('==========================');

class Player {
  name = '';
  health = 100;
  power = 10;

  constructor(name) {
    this.name = name;
  }

  hit(power) {
    this.health -= power;
    if (this.health <= 0) {
      this.health = 0;
    }
  }

  useItem(item) {
    if (item?.health) {
      console.log(`${this.name} +${item?.health} health`);
      this.health += item?.health;
    }
    if (item?.power) {
      console.log(`${this.name} +${item?.power} power`);
      this.power += item?.power;
    }
  }

  showStatus() {
    return console.log(
      `${this.name} (Health => ${this.health}, Power => ${this.power})`
    );
  }
}

class ShootingGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    const randomValue = [0, 10];

    return {
      health: randomValue[Math.floor(Math.random() * 2)],
      power: randomValue[Math.floor(Math.random() * 2)],
    };
  }

  start() {
    let round = 1;

    while (this.player1.health > 0 && this.player2.health > 0) {
      console.log(`- round ${round++}`);

      this.player1.showStatus();
      this.player2.showStatus();
      console.log();

      console.log(this.player1.name, 'turn');
      this.player1.useItem(this.getRandomItem());

      this.player2.hit(this.player1.power);

      this.player2.showStatus();

      if (this.player2.health <= 0) {
        break;
      }

      console.log(this.player2.name, 'turn');
      this.player2.useItem(this.getRandomItem());

      this.player1.hit(this.player2.power);

      this.player1.showStatus();

      if (this.player1.health <= 0) {
        break;
      }

      console.log();
    }

    if (this.player2.health <= 0) {
      return console.log(`${this.player1.name} wins!`);
    } else if (this.player1.health <= 0) {
      return console.log(`${this.player2.name} wins!`);
    }
  }
}

const fikri = new Player('fikri');
const doni = new Player('doni');

const shootingGame = new ShootingGame(fikri, doni);

shootingGame.start();
