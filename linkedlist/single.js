const SingleLinkedlist = require("./SingleLinkedlist");

const singleLinkedList = new SingleLinkedlist();

singleLinkedList.insert(20, 0);
singleLinkedList.prepend(10);
singleLinkedList.append(40);
singleLinkedList.insert(30, 2);
singleLinkedList.append(50);

console.log(singleLinkedList.head);

singleLinkedList.printList();

console.log(singleLinkedList.search(60));

console.log(singleLinkedList.removeFirst());

console.log(singleLinkedList.head);

console.log(singleLinkedList.removeEnd());
console.log(singleLinkedList.head);

console.log(singleLinkedList.remove(1));
console.log(singleLinkedList.head);

console.log(singleLinkedList.emptyList());
console.log(singleLinkedList);
