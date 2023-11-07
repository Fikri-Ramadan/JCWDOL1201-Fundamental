// buat sebuah class tokopedia
// dimana setiap produk memiliki categori yang berbeda beda
// pada saat belanja bisa add to cart
// terdapat stock di dalam produk
// apabila stock lebih sedikit dari pada request add to cart maka dia akan error
// bisa checkout, pada saat checkout cart akan kosong dan stock akan berkurang
// menu untuk menambahkan produk, edit produk, delete produk

// produk, name, stock, category , warna

// category 2
// pakaian => ukuran, brand
// buku => author,totalPage

class Tokopedia {
  products = [];
  cart = [];

  getProducts() {
    return this.products;
  }

  getCart() {
    return this.cart;
  }

  addProduct(product, stock) {
    if (!product instanceof Product) {
      return console.log('invalid product');
    }

    const findProduct = this.products.findIndex(
      (prod) => prod.name === product.name
    );

    if (findProduct === -1) {
      this.products.push({ ...product, stock });
    } else {
      return console.log('product already added before');
    }
  }

  editProduct(product, stock) {
    if (!product instanceof Product) {
      return console.log('invalid product');
    }

    const findProduct = this.products.findIndex(
      (prod) => prod.name === product.name
    );

    if (findProduct === -1) {
      return console.log('product not found');
    } else {
      this.products[findProduct] = { ...product, stock };
    }
  }

  deleteProduct(product) {
    if (!product instanceof Product) {
      return console.log('invalid product');
    }

    const findProduct = this.products.findIndex(
      (prod) => prod.name === product.name
    );

    if (findProduct === -1) {
      return console.log('product not found');
    }

    this.products.splice(findProduct, 1);
  }

  addToCart(product, jumlah) {
    const findProduct = this.products.findIndex(
      (prod) => prod.name === product.name
    );

    if (findProduct === -1) {
      return console.log('product not found');
    }

    if (jumlah > this.products[findProduct].stock) {
      return console.log('Error, stock kurang');
    }

    this.cart.push({ ...product, jumlah });
  }

  checkout() {
    console.log('checkout on proses...');
    this.products.map((product) => {
      this.cart.forEach((prodCart) => {
        if (prodCart.name === product.name) {
          product.stock -= prodCart.jumlah;
        }
      });
    });

    this.cart.splice(0, this.cart.length);
    console.log('checkout success!!!...');
  }
}

class Product {
  constructor(name, category, warna) {
    this.name = name;
    this.category = category;
    this.warna = warna;
  }
}

// Execute
const tokopedia = new Tokopedia();

// Create Product instance
const bajuGucci = new Product(
  'gucci',
  { pakaian: { ukuran: 'xl', brand: 'gucci' } },
  'biru'
);
const Baju3s = new Product(
  'Baju Keren',
  { pakaian: { ukuran: 'xl', brand: '3s' } },
  'hitam'
);
/////////////////////////////////////////////////////

tokopedia.addProduct(bajuGucci, 18);
tokopedia.addProduct(Baju3s, 20);
console.log('Product -> ', tokopedia.getProducts());
console.log('Cart -> ', tokopedia.getCart());

console.log();
console.log('Add baju gucci ke cart');
tokopedia.addToCart(bajuGucci, 18);
console.log('Cart -> ', tokopedia.getCart());

console.log();
console.log('checkout');
tokopedia.checkout();

console.log('Product -> ', tokopedia.getProducts());
console.log('Cart -> ', tokopedia.getCart());

console.log();
console.log('Edit stock baju gucci');
tokopedia.editProduct(bajuGucci, 3);
console.log('Product -> ', tokopedia.getProducts());

console.log();
console.log('Delete baju gucci');
tokopedia.deleteProduct(bajuGucci);
console.log('Product -> ', tokopedia.getProducts());
