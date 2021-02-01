const Node = require("./Node");

class CircleSingleLinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }
    check() {
        if (!this.head) {
            return false;
        }
        return true;
    }
    prepend(val) {
        const node = new Node(val, this.head);
        this.head = node;
        this.size === 0 ? (this.tail = this.head) : (this.tail.next = this.head);
        this.size++;
        return this;
    }
}

module.exports = CircleSingleLinkedList;
