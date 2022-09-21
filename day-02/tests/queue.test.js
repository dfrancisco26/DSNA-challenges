const { Queue } = require('../Queue.js');

describe('Queue class', () => {
  it('queue.enqueue should add an item to array', () => {
    const queue = new Queue();
    queue.enqueue('oh, hello!');
    expect(queue.hasNext()).toEqual(true);
  });

});
