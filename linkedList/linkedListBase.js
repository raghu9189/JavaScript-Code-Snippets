// Node 
class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

function traverseList(head){

    while(head != null){
        console.log(head.data);
        head = head.next
    }
}

function main(){
    let head = new Node(10);
    head.next = new Node(20);
    head.next.next = new Node(30);
    traverseList(head);
}

main()