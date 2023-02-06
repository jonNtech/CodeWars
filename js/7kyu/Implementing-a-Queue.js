//Queues are linear collections of objects that can be inserted and removed in a FIFO (first in, first out) manner.

//In this problem, we are going to be implementing our own enqueue, dequeue, and size methods for the queue constructor we are creating, so we should be able to create new instances of the Queue.
// The enqueue method takes in the item as a parameter, while the dequeue method does not.
// The size method simply returns the number of items in the queue.



class Queue {
    constructor() {
    this.list = []
  }
};

Queue.prototype.enqueue = function(item) {
  this.list.push(item)
};

Queue.prototype.dequeue = function() {
  this.list.shift()
};

Queue.prototype.size = function() {
  return this.list.length
};
