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

    return {getList, append};
}
// const newList = LinkedList();