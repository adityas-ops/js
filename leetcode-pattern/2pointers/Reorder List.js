
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/*
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head || !head.next) return;

  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let secondHalf = slow.next;
  slow.next = null;
  secondHalf = reverseList(secondHalf);

  let firstHalf = head;
  while (secondHalf) {
    let firstNext = firstHalf.next;
    let secondNext = secondHalf.next;

    firstHalf.next = secondHalf;
    secondHalf.next = firstNext;

    firstHalf = firstNext;
    secondHalf = secondNext;
  }
};

function reverseList(node) {
  let prev = null;
  let curr = node;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

function printList(head) {
  const values = [];
  let current = head;

  while (current) {
    values.push(current.val);
    current = current.next;
  }

  return values.join(" -> ");
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log("Before reorder:", printList(head));
reorderList(head);
console.log("After reorder:", printList(head));