function Node(value = null, next = null) {
    let data = value;
    let nextNode = next;

    function getValue() {
        return data;
    }

    function setValue(value) {
        data = value;
    }

    function getNext() {
        return nextNode;
    }

    function setNext(next) {
        nextNode = next;
    }

    return {
        getValue,
        setValue,
        getNext,
        setNext,
    }
}

function Linkedlist() {
    let head = null;
    let tail;
    let size = 0;
    
    function append(value) {
        let newNode = Node(value);

        if (size == 0) {
            head = newNode;
            tail = newNode;
        } else {
            tail.setNext(newNode);
            tail = newNode;
        }

        size++;
    }

    function prepend(value) {
        let newNode = Node(value, head);
        head = newNode;

        size++;
    }

    function getSize() {
        return size;
    }

    function getHead() {
        return head;
    }

    function getTail() {
        return tail;
    }

    function at(index) {
        if (index < 0 || index >= size) return null;
        
        let node = head;
        for (let i = 0; i < index; i++) {
            node = node.getNext();
        }

        return node;
    }

    function pop() {}
    function contains(value) {}
    function find(value) {}

    function toString() {
        let string = "";
        for (let node = head; node != null; node = node.getNext()) {
            string += `(${node.getValue()}) -> ` 
        }

        return string + "NULL";
    }

    function insertAt(value, index) {}
    function removeAt(index) {}

    return {
        append,
        prepend,
        getSize,
        getHead,
        getTail,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt,
    }
}

let ll = Linkedlist();
ll.append(1);
ll.append(2);
ll.append(3);
ll.prepend(0);
ll.append(3);

console.log(ll.toString());

console.log(ll.getHead().getValue()) // 0
console.log(ll.getTail().getValue()) // 3
console.log(ll.getSize()) // 5
console.log(ll.at(4).getValue()); // 3 
console.log(ll.at(0).getValue()); // 0
console.log(ll.at(5)) // null
console.log(ll.at(-1)); // null

