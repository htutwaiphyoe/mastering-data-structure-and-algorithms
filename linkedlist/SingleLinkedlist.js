const Node = require("./Node");

class SingleLinkedlist {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }
    prepend(value) {
        // create new node, store value and store next
        const node = new Node(value, this.head);

        // update head with new node
        this.head = node;

        // check tail is null and update tail with new node
        if (!this.tail) this.tail = node;

        // increment list size
        this.size += 1;

        return this;
    }
    append(value) {
        // create new node and store value
        const node = new Node(value);

        // update last node next with new node
        this.tail.next = node;

        // update tail with new node
        this.tail = node;

        // increment list size
        this.size += 1;

        return this;
    }
    insert(value, index) {
        // check index is valid
        if (index < 0 || index > this.size) {
            return this;
        }

        // if index is 0, call prepend
        if (index === 0) {
            return this.prepend(value);
        }

        // create new node
        const node = new Node(value);

        let cur, prev;
        cur = this.head;
        let i = 0;

        while (i < index) {
            i++;
            prev = cur;
            cur = cur.next;
        }

        node.next = cur;
        prev.next = node;

        this.size++;
        return this;
    }

    printList() {
        // create temporary node
        let node = this.head;

        // loop until node exists
        while (node) {
            console.log(node.value);
            node = node.next;
        }
    }

    search(val) {
        // create temporary node
        let node = this.head;

        // loop the list
        while (node) {
            // compare values
            if (node.value === val) {
                return node.value;
            }
            node = node.next;
        }
        return -1;
    }
    removeFirst() {
        if (this.checkList()) {
            this.head = this.head.next;
            if (this.size === 1) {
                this.tail = null;
            }
            return true;
        }
        return false;
    }

    checkList() {
        if (!this.head) {
            return false;
        }
        return true;
    }
}

module.exports = SingleLinkedlist;
