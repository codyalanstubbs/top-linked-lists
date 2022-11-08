const Node = (nodeValue = null, nextNodeLink = null) => {
    let value = nodeValue;
    let nextNode = nextNodeLink;
    return {value, nextNode};
};

const LinkedList = () => {
    const head = Node();
    const list = {head};

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

    return {getList, append, prepend};
}
const newList = LinkedList();

console.log(newList.prepend("Value0"));
console.log(newList.prepend("Value1"));
console.log(newList.prepend("Value2"));
console.log(newList.prepend("Value3"));