let s = [1,2,3,4,5,6];
let k = Math.floor(s.length / 2)+1 // 6/2 = 3
console.log(k); // 3

function deleteMiddle(s, k) {
  if (k === 1) {
    s.pop();
    return;
  }
  
  let temp = s.pop();
  deleteMiddle(s, k - 1);
  s.push(temp);
  return;
}

deleteMiddle(s, k);
console.log(s); // [1, 2, 3, 5, 6] — deletes 4 ✓