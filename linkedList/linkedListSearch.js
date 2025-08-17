// Node 
class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

function searchElement(head, ele){
    while(head != null){
        // console.log('Data : ', head.data);
        if (head.data == ele){
            return true;
        }

        // move to next node
        head = head.next
    }
    return false;
}

function main(){
    let head = new Node(10);
    head.next = new Node(20);
    head.next.next = new Node(30);
    let ele = 30;
    let isFound = searchElement(head, ele);
    console.log('Found : ', isFound);
}

main()