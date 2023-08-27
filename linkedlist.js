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

function LinkedList() {
    let head = null;
    let tail;
    let size = 0;
    
    function append(value) {
        let newNode = Node(value);

        if (size == 0) {
            head = newNode;
            tail = newNode;
            return;
        }
        
        tail.setNext(newNode);
        tail = newNode;

        size++;
    }

    function prepend(value {}
    function getSize() {}
    function getHead() {}
    function getTail() {}
    function at(index) {}
    function pop() {}
    function contains(value) {}
    function find(value) {}
    function toString() {}
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

