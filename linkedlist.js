
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

function display(head){
    let current = head;
    while(current !== null){
        console.log(current.val)
        current = current.next;
    }
}



function deleteHead(head){
    if(head === null || head.next === null){
        return null;
    }
    
    return head.next;
}

function deleteTail(head){
        if(head === null || head.next === null){
        return null;
    }
    let cur = head;
    let ans = cur;
    while(cur.next.next !== null){
        cur = cur.next;
    }
    cur.next = null;
    
    return ans
}

// 1,2,3,4,5

function deleteNode(head,n){
    let cur = head;
    let ans = cur;
    for(let i =0; i<n-1;i++){
        cur = cur.next;
    }
    let restNode = cur.next.next;
    cur.next = null;
    cur.next = restNode;
    return ans;
}

function countNode(head){
    let count = 0;
    let current = head;
    while(current !== null){
        count = count+1;
        current = current.next;
    }
    return count;
}


let head1 = new Node(5)
head1.next = new Node(8)
head1.next.next = new Node(10)

let head = new Node(1);
head.next = new Node(2);
head.next.next = head1;

display(head);

let head2 = deleteNode(head,2);
console.log("\n")
display(head2);

// optimal solution

var oddEvenList = function(head) {
    if (head === null || head.next === null) return head;

    let odd = head;          
    let even = head.next;   
    let evenHead = even;     

    while (even !== null && even.next !== null) {
        odd.next = even.next;   
        odd = odd.next;          

        even.next = odd.next;   
        even = even.next;        
    }

    odd.next = evenHead;     
    return head;
};