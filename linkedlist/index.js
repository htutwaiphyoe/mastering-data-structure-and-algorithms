const SingleLinkedlist = require("./SingleLinkedlist");

const singleLinkedList = new SingleLinkedlist();

singleLinkedList.insert(20, 0);
singleLinkedList.prepend(10);
singleLinkedList.append(40);
singleLinkedList.insert(30, 2);

console.log(singleLinkedList.head);

singleLinkedList.printList();

console.log(singleLinkedList.search(60));

console.log(singleLinkedList.removeFirst());

console.log(singleLinkedList.head);
