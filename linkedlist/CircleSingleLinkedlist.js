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
        const node = new Node(val);

        if (this.size === 0) {
            this.head = node;
            node.next = this.head;
            this.tail = this.head;
        } else {
            node.next = this.head;
            this.head = node;
            this.tail.next = this.head;
        }

        this.size++;
        return this;
    }
    append(val) {
        const node = new Node(val);
        if (this.size === 0) {
            this.head = node;
            node.next = this.head;
            this.tail = this.head;
        } else {
            node.next = this.head;
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
        return this;
    }
}

module.exports = CircleSingleLinkedList;
