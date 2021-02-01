const CircleSingleLinkedList = require("./CircleSingleLinkedList");

const csll = new CircleSingleLinkedList();

csll.prepend(200);
csll.prepend(100);

console.log(csll.head);

csll.append(300);
csll.append(400);

console.log(csll.head);


