// Node 
class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

function countLength(head){
    let length = 0;
    while(head != null){
        length++;
        // move to next node
        head = head.next
    }
    return length;
}

function main(){
    let head = new Node(10);
    head.next = new Node(20);
    head.next.next = new Node(30);
    let len = countLength(head);
    console.log('Length : ', len);
}

main()