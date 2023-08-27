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
    let size = 0;
    
    function append(value) {}
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

