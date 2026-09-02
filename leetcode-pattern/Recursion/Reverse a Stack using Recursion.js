
let arr = [1,2,3,4,5,6];



function reverseStack(s){
    if(s.length === 1){
        return;
    }
    let temp = s.pop();
          
     reverseStack(s);

     insert(s,temp)
}

function insert(s, temp) {
  if (s.length === 0) {
    s.push(temp);
    return;
  }
  
  let x = s.pop();
  insert(s, temp);
  s.push(x);
}

console.log(arr)
reverseStack(arr)
console.log(arr)