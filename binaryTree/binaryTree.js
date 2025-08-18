class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let firstNode = new Node(10);
let secondNode = new Node(20);
let thirdNode = new Node(30);
let fourthNode = new Node(40);

firstNode.left = secondNode;
firstNode.right = thirdNode;
secondNode.left = fourthNode;

console.log(firstNode);