//Question 2
//Given a non-empty, singly linked list with head node head, return a middle node of linked list. If there are two middle nodes, return the second middle node.

//steps
//create Node class
//create SinglyLinkedList class
//given non-empty singly linked list e.g. [1,2,3,4,5]
//push the new node values in the linked list
//get(index) method to return the node at the given index
//Need to traverse the linked list with get()
//middleNode() method to calculate the middle index and use ternary operator to return middle number by checking if it is decimal using Number.isInteger()
//e.g. if it is length of 5 then 5/2=2.5 in that case use Math.floor()
//if not, then return the middle number as it is

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let temp = this.tail;
      temp.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index > this.length) return undefined;
    let current = this.head;
    let counter = 0;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  middleNode() {
    let middle = this.length / 2;
    middle = Number.isInteger(middle) ? middle : Math.floor(middle);
    return this.get(middle);
  }
}

const test = [1, 2, 3, 4, 5];
const list = new SinglyLinkedList();

for (let i = 0; i < test.length; i++) {
  list.push(test[i]);
}

// console.log(list.head) //-> 1
// console.log(list.head.next) //-> 2
// console.log(list.head.next.next) //-> 3
// console.log(list.head.next.next.next) //-> 4
// console.log(list.head.next.next.next.next) //-> 5
// console.log(list.head.next.next.next.next.next,) //-> null

console.log(list.middleNode());
