const { ListNode } = require('./ListNode.js');

exports.SinglyLinkedList = class SinglyLinkedList {

    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }
    
    get head() {
        return this._head;
    }
    
    set head(value) {
        if (value instanceof ListNode) {
            this._head = value;
        } else {
            this._head = new ListNode(value);
        }
    }
    
    get tail() {
        return this._tail;
    }

    set tail(value) {
        if (value instanceof ListNode) {
            this._tail = value;
        } else {
            this._tail = new ListNode(value);
        }
    }

    incrementLength() {
        return this.length++;
    }

    decrementLength() {
        return this.length--;
    }

    push(value) {
        const node = new ListNode(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.incrementLength();
        return this;
    }

    traverse() {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
    }

    pop() {
        if (!this.head) return undefined;

        let pre = null;
        let current = this.head;
        while (current.next !== null) {
            pre = current;
            current = current.next;
        }

        this.tail = pre;
        if (this.length === 1) this.head = null;
        this.decrementLength();

        return current;
    }

    shift() {
        if (!this.head) return undefined;

        const oldHead = this.head;
        this.head = oldHead.next || null;
        if (this.length === 1) this.tail = null;
        this.decrementLength();
        return oldHead;
    }

    unshift(value) {
        const node = new ListNode(value);
        if (this.head) node.next(this.head);
        this.head = node;
        if (!this.tail) this.tail = this.head;
        this.incrementLength();
        return this;
    }

    get(i) {
        let ci = 0;
        let current = this.head;
        while (current) {
            if (ci === i) return current;
            current = current.next;
            ci++;
        } 
        return;
    }

    set(value, i) {
        const node = this.get(i);
        if (!node) return;
        node.value = value;
        return true;
    }

    insert(value, i) {
        const latestPosition = this.length - 1;
        if (i > latestPosition || i < 0) return;
        if (i === 0) this.unshift(value);
        if (i === latestPosition) return this.push(value);

        const pre = this.get(i - 1);
        const currentNode = pre.next;
        const newNode = new ListNode(value);
        newNode.next = currentNode;
        pre.next = newNode; 
        this.incrementLength();
        return true;
    }

    remove(i) {
        if (!this.length > 1) return;

        const latestPosition = this.length - 1;

        if (i > latestPosition || i < 0) return;
        if (i === 0) return this.shift(i);
        if (i === latestPosition) return this.pop(i);
    
        const pre = this.get(i - 1);
        const nodeToRemove = pre.next;
        pre.next = nodeToRemove.next;
        this.decrementLength();
        return nodeToRemove;
    }

    /**
     * Hard to understand.
     */
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}
