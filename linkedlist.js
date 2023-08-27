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
    let tail = null;
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

    function pop() {

        if (size == 0) return tail;

        if (size == 1) {
            head = null;
        }

        let node = head;
        for (let i = 0; i < size - 2; i++) {
            node = node.getNext();
        }

        let poped = tail;

        node.setNext(null);
        tail = node;
        size--;

        return poped;
    }

    function contains(value) {
        for (let node = head; node != null; node = node.getNext()) {
            if (node.getValue() == value) return true;
        }
        
        return false;
    }

    function find(value) {
        let index = 0;

        for (let node = head; node != null; node = node.getNext()) {
           if (node.getValue() == value) return index; 
           index++;
        }

        return -1;
    }

    function toString() {
        let string = "";
        for (let node = head; node != null; node = node.getNext()) {
            string += `(${node.getValue()}) -> ` 
        }

        return string + "NULL";
    }

    function insertAt(value, index) {
        if (index == 0) {
            prepend(value);
            return;
        } 

        if (index == (size - 1)) {
            append(value);
            return;
        }

        let target = at(index - 1);

        if (target) {
            const newNode = Node(value);
            newNode.setNext(target.getNext());
            target.setNext(newNode);
            size++;
        }
    }

    function removeAt(index) {
        if (index == 0) {
            head = head.getNext();
            size--;
            return;
        } 

        if (index == (size - 1)) {
            pop();
            return;
        }

        let target = at(index - 1);

        if (target) {
            let next = target.getNext();
            target.setNext(next.getNext());
            size--;
        } 
    }

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

console.log(ll.pop()) // null

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
console.log(ll.pop().getValue()); // 3

console.log(ll.toString());
console.log(ll.contains(0));  // true
console.log(ll.contains(-1)); // false

console.log(ll.find(2)); // 2
console.log(ll.find(10)); // -1

ll.insertAt(-10, 0);
ll.insertAt(-99, ll.getSize() - 1);

console.log(ll.toString());
console.log(ll.getHead().getValue()); // -10
console.log(ll.getTail().getValue()); // -99

ll.removeAt(0);
ll.removeAt(ll.getSize() - 1);

console.log(ll.toString());
console.log(ll.getHead().getValue()); // 0
console.log(ll.getTail().getValue()); // 3

