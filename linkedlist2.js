
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




let head1 = new Node(3)
head1.next = new Node(4)
head1.next.next = new Node(5)

let head = new Node(1);
head.next = new Node(2);
head.next.next = head1;

display(head);




function merger(head,tail){
    if(head === null || tail === null ) return null;
  
    let cur = head;
      let ans = cur;
    while(cur.next !== null){
        cur = cur.next;
    }
    cur.next = tail;
    return ans;

}



function oddEVen(head) {
    if(head === null) return null;
        let count = 1;
        let even = new Node(0)
        let odd  = new Node(0)
        let cur = head;
        let even1 = even;
        let odd1 = odd;
        while(cur !== null){
           if( count%2 ===1){
            odd.next = new Node(cur.val);
             odd = odd.next;
           }else{
            even.next = new Node(cur.val);
            even = even.next;
           }
           count = count+1;
           cur = cur.next;
        }
        odd1 = odd1.next;
        even1 = even1.next;
        return  merger(odd1,even1)

};

oddEVen(head)