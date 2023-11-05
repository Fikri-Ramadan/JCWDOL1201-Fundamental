class Stack {
  #maxSize;
  #container = [];

  constructor(maxSize) {
    this.#maxSize = maxSize;
  }

  push(element) {
    if (this.#isFull()) {
      return console.log('stack overflow');
    }
    this.#container.push(element);
  }

  pop() {
    if (this.#isEmpty()) {
      return console.log('stack underflow');
    }
    this.#container.pop();
  }

  getElement() {
    return this.#container;
  }

  #isFull() {
    return this.#container.length >= this.#maxSize;
  }

  #isEmpty() {
    return this.#container.length === 0;
  }
}

const stack = new Stack(5);
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);

console.log(stack.getElement());

stack.pop();

console.log(stack.getElement());
