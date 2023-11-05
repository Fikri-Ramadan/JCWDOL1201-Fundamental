class Queue {
  #container = [];

  enqueue(element) {
    this.#container.push(element);
  }

  dequeue() {
    this.#container.shift();
  }

  getElement() {
    return this.#container;
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.getElement());

queue.dequeue();

console.log(queue.getElement());
