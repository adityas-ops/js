 if(head === null) return;
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