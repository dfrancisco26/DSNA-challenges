class Stack {
  #list = [];
  
  constructor(theList) {
    if (theList) this.#list = theList;
  }
  push(newItem) {
    this.#list.push(newItem);
  }
  peek() {
    return this.#list[this.#list.length - 1];
  }

  pop() {
    return this.#list.pop();
  }
}

module.exports = { Stack };
