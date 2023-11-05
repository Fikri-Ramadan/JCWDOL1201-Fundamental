// nomor 1
// buat program order goFood
// food => { name : "capcay" , price : 50000, qty : 2 }
// pada saat menambahkan makanan yang sama , maka qty akan diupdate
// apabila makanan yg ditambah belum ada di cart maka push
// restoran => { name : "kwetiaw 99", jarak : 5 }
// 1km harga ongkir adalah 2000
// berapa total pricenya ?

// buat 4 function
// 1. hitung total biaya
// 2. addFood menambahkan makanan ke cart
// 3. menghapus makanan di cart
// 4. mengedit qty makanan tertentu di dalam cart

// CRUD = > CREATE , READ (GET=>) , UPDATE ,DELETE

class Food {
  constructor(name, price, qty) {
    this.name = name;
    this.price = price;
  }
}

class Restaurant {
  constructor(name, distance) {
    this.name = name;
    this.distance = distance;
  }
}

class Cart extends Restaurant {
  foods = [];
  price = 0;

  constructor(restaurant) {
    super(restaurant.name, restaurant.distance);
  }

  getOrder() {
    return this.foods;
  }

  getTotalPrice() {
    this.price = this.foods.reduce(
      (acc, curr) => acc + curr.price * curr.qty,
      0
    );
    console.log('Foods:', this.price, ', ongkir:', this.distance * 2000);
    return this.price + this.distance * 2000;
  }

  addFood(food, qty) {
    if (!food instanceof Food) {
      return console.log('invalid food');
    }

    const indexFood = this.foods.findIndex((value) => value.name === food.name);

    if (indexFood === -1) {
      this.foods.push({ ...food, qty });
    } else {
      this.foods[indexFood].qty += qty;
    }
  }

  updateFood(food, qty) {
    if (!food instanceof Food) {
      return console.log('invalid food');
    }

    const indexFood = this.foods.findIndex((value) => value.name === food.name);

    if (indexFood === -1) {
      return console.log('food in your cart is not found');
    } else {
      this.foods[indexFood].qty = qty;
    }
  }

  deleteFood(food) {
    if (!food instanceof Food) {
      return console.log('invalid food');
    }

    const indexFood = this.foods.findIndex((value) => value.name === food.name);

    if (indexFood === -1) {
      return console.log('food in your cart is not found');
    } else {
      this.foods.splice(indexFood, 1);
    }
  }
}

const restaurant = new Restaurant('swetiaw 99', 5);
const cart = new Cart(restaurant);

const capcay = new Food('capcay', 50000);
const tahu = new Food('tahu', 8000);
const nasi = new Food('nasi', 5000);

cart.addFood(capcay, 2);
cart.addFood(capcay, 4);
cart.addFood(tahu, 6);
cart.addFood(nasi, 3);
console.log('Setelah order -> ', cart.getOrder());
console.log();

cart.deleteFood(tahu);
console.log('Setelah delete tahu -> ', cart.getOrder());
console.log();

cart.updateFood(nasi, 6);
console.log('Setelah update qty nasi (final order) -> ', cart.getOrder());
console.log();

console.log('Total harga yang harus dibayar ->', cart.getTotalPrice());
