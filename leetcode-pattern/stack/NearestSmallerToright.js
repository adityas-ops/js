

// arr = 1,3,2,4 => find out nearest greater to right then answer is => -1,2,-1,-1
// 4,2,3,1
//  1,3,0,0,1,2,4  => 0,0,-1,-1,-1,-1,-1
let arr = [1,3,2,4];
// let arr = [1,3,0,0,1,2,4]

// brute force


// using stack for this question
function nearestGreaterRight1(arr){
    let stack = [];
    let ans = [];
    for(let i = arr.length-1;i>=0;i--){
       while( stack.length > 0 && stack[stack.length-1] > arr[i] && stack[stack.length-1] !== undefined ){
           stack.pop();
       }
       let top = stack[stack.length-1] !== undefined ? stack[stack.length-1]:-1;
       ans.push(top);
       stack.push(arr[i])
    }
   return ans.reverse()
}

console.log(nearestGreaterRight1(arr))