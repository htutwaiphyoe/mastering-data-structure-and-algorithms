const CircleSingleLinkedList = require("./CircleSingleLinkedList");

const csll = new CircleSingleLinkedList();

csll.prepend(50);
csll.prepend(100);

console.log(csll.head);

