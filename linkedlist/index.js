const CircleSingleLinkedList = require("./CircleSingleLinkedList");

const csll = new CircleSingleLinkedList();

csll.append(200);
csll.insert(100, 0);
csll.insert(300, 2);
csll.insert(400, 1);
csll.prepend(50);
csll.insert(500, 2);

csll.printList();

console.log(csll.search(60));
console.log(csll.search(50));