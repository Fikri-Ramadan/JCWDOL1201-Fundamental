// 1. Create a function to calculate array of student data
console.log('============================');
console.log('Soal Exercise 1');
console.log('============================');

class Student {
  constructor(name, email, age, score) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.score = score;
  }
}

const students = [
  new Student('fikri', 'fikri@gmail.com', 19, 100),
  new Student('fikri', 'fikri@gmail.com', 20, 80),
  new Student('fikri', 'fikri@gmail.com', 18, 90),
  new Student('fikri', 'fikri@gmail.com', 20, 80),
  new Student('fikri', 'fikri@gmail.com', 15, 85),
];

const calcStudentData = (students = []) => {
  let scores = [];
  let ages = [];

  for (let item of students) {
    for (let key in item) {
      if (key === 'score') {
        scores.push(item[key]);
      }
      if (key === 'age') {
        ages.push(item[key]);
      }
    }
  }

  scores.sort((a, b) => a - b);
  ages.sort((a, b) => a - b);

  return {
    score: {
      highest: scores[scores.length - 1],
      lowest: scores[0],
      average: scores.reduce((acc, curr) => acc + curr, 0) / scores.length,
    },
    age: {
      highest: ages[ages.length - 1],
      lowest: ages[0],
      average: ages.reduce((acc, curr) => acc + curr, 0) / ages.length,
    },
  };
};

console.log(calcStudentData(students));

// 2. Create a program to create transaction
console.log();
console.log('============================');
console.log('Soal Exercise 2');
console.log('============================');

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  #total = 0;
  #products = [];

  getTotalPrice() {
    this.#total = this.#products.reduce(
      (acc, curr) => acc + curr.price * curr.qty,
      0
    );

    return this.#total;
  }

  getProducts() {
    return this.#products;
  }

  checkout(pay = 0) {
    if (pay < this.#total) {
      return console.log('Uang anda tidak cukup');
    }
    pay -= this.#total;
    if (pay === 0) {
      console.log('Terimakasih');
    } else {
      console.log(
        `Terimakasih, kembalian anda Rp.${pay.toLocaleString('id-ID')},00`
      );
    }
    this.#total = 0;
  }

  addToCart(product, qty) {
    if (!product instanceof Product) {
      return console.log('invalid product');
    }
    const checkProductIsExist =
      this.#products.findIndex((prod) => prod.name === product.name) !== -1;

    if (!checkProductIsExist) {
      this.#products.push({ ...product, qty: qty });
    } else {
      this.#products = this.#products.map((prod) => {
        if (prod.name === product.name) {
          return {
            ...prod,
            qty: prod.qty + qty,
          };
        } else {
          return { ...prod };
        }
      });
    }
  }
}

const realme = new Product('realme 3', 2000000);
const samsung = new Product('samsung j2 prime', 1200000);

const transaction = new Transaction();
transaction.addToCart(realme, 2);
transaction.addToCart(realme, 3);
transaction.addToCart(samsung, 4);
transaction.addToCart(realme, 5);

const totalPrice = transaction.getTotalPrice();
const cart = transaction.getProducts();

console.log('total harga ->', totalPrice);
console.log('keranjang anda ->', cart);
transaction.checkout(24800000);
