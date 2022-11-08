const Node = (nodeValue = null, nextNodeLink = null) => {
    let value = nodeValue;
    let nextNode = nextNodeLink;

    return {
        setValue(newValue) {value = newValue},
        setNextNode(newNextNodeLink) {nextNode = newNextNodeLink},
        getValue() {return value},
        getNextNode() {return nextNode}
    }
};