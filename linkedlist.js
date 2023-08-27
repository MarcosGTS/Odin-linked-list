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

    function prepend(value) {}
    function getSize() {}
    function getHead() {}
    function getTail() {}
    function at(index) {}
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
        size,
        head,
        tail,
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

console.log(ll.toString());
