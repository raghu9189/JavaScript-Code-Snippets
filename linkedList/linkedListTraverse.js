// Node 
class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

function traverseList(head){
    while(head != null){
        console.log('Data : ', head.data);
        // console.log('Data : ', head);
        head = head.next
    }
}

function main(){
    let head = new Node(10);
    // console.log(head);

    head.next = new Node(20);
    // console.log(head.next);

    head.next.next = new Node(30);
    // console.log(head.next.next);
    // console.log(head.next.next.next);

    traverseList(head);
}

main()