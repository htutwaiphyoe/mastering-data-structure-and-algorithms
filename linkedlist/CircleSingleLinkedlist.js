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
    insert(value, index) {
        if (index > this.size || index < 0 || index === undefined) {
            return this;
        } else if (index === 0 || this.size === 0) {
            return this.prepend(value);
        } else if (index === this.size) {
            return this.append(value);
        }
        const node = new Node(value);
        let cur, prev;
        cur = this.head;
        let i = 0;
        while (i < index) {
            i++;
            prev = cur;
            cur = cur.next;
        }
        node.next = prev.next;
        prev.next = node;
        this.size++;
        return this;
    }
    printList() {
        if (this.size === 0) return null;
        let node = this.head;
        let i = 0;
        while (i < this.size) {
            i++;
            console.log(node.value);
            node = node.next;
        }
    }
    search(val) {
        if (this.size === 0) return false;
        let node = this.head;
        for (let i = 0; i < this.size; i++) {
            if (val === node.value) {
                return true;
            }
        }
        return false;
    }
}

module.exports = CircleSingleLinkedList;
