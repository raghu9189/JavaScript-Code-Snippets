// Node 
class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

function insertAtEnd(head, ele){
    const newNode = new Node(ele);

    // if the linked list is empty 
    // make new node as head and return
    if(head === null){
        return newNode;
    }

    while(head.next != null){
        head = head.next;
    }
    head.next = newNode;
    return head;
}

function main(){
    let head = new Node(20);
    head.next = new Node(30);
    head.next.next = new Node(40);

    let ele = 10;
    let newHead = insertAtEnd(head, ele);
    // console.log(JSON.stringify(newHead));
    console.log(JSON.stringify(head));

}

main()