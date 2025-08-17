// Node 
class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

function insertAtBegining(head, ele){
    const newNode = new Node(ele);
    newNode.next = head;
    return newNode;
}

function main(){
    let head = new Node(20);
    head.next = new Node(30);
    head.next.next = new Node(40);
    let ele = 10;
    let newHead = insertAtBegining(head, ele);
    console.log(JSON.stringify(newHead));
}

main()