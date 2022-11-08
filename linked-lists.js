const Node = (nodeValue = null, nextNodeLink = null) => {
    let value = nodeValue;
    let nextNode = nextNodeLink;
    return {value, nextNode};
};

const LinkedList = () => {
    const nodeHead = Node();
    const list = {head: nodeHead};

    const getList = () => {return list};

    const append = (value, prevNode = list.head) => {
        if (prevNode.nextNode !== null) {
            append(value, prevNode.nextNode);
        } else {
            prevNode.nextNode = Node(value);
        }
        return list;
    };

    const prepend = (value, headNode = list.head) => {
        if (headNode.value === null && headNode.nextNode === null) {
            headNode.nextNode = Node(value);
        } else if (headNode.value === null && headNode.nextNode !== null) {
            headNode.nextNode = Node(value, headNode.nextNode);
        } 
        return list;
    }

    const size = (startNode = list.head) => {
        let counter = 0;
        counter++;
        if (startNode.nextNode !== null) {
            counter += size(startNode.nextNode);   
        }
        return counter;
    }

    const head = () => {
        return list.head;
    }

    const tail = (currentNode = list.head) => {
        let lastNode;
        if (currentNode.nextNode === null) {
            return currentNode;
        } else {
            lastNode = tail(currentNode.nextNode);
        }
        return lastNode;
    }

    const at = (index, currentNode = list.head, counter = 0) => {
        let selectedNode;
        if (index === counter) {
            return currentNode;
        } else {
            counter++;
            selectedNode = at(index, currentNode.nextNode, counter);
        }
        return selectedNode;
    }

    const pop = (currentNode = list.head) => {
        if (currentNode.nextNode.nextNode === null) {
            return currentNode.nextNode = null;
        } else {
            pop(currentNode.nextNode);
        }
        return list;
    }

    const contains = (value, currentNode = list.head) => {
        let result;
        if (currentNode.value === value) {
            return true;
        } else if (currentNode.value !== value && currentNode.nextNode === null) {
            return false;
        } else {
            result = contains(value, currentNode.nextNode);
        }
        return result;
    }

    const find = (value, currentNode = list.head, counter = 0) => {
        if (currentNode.value === value) {
            return counter;
        } else if (currentNode.value !== value && currentNode.nextNode === null) {
            return null;
        } else {
            counter++;
            counter = find(value, currentNode.nextNode, counter);
        }
        return counter;
    }

    return {
        getList, append, prepend, size, 
        head, tail, at, pop, contains,
        find
    };
}
const newList = LinkedList();
// for (let i = 0; i < 10; i++) {
//     newList.append(`V${i}`);
// }
// for (let i = 0; i < 20; i++) {
//     console.log(`find V${i}: `, newList.find(`V${i}`))
// }
