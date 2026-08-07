// arr = 1,3,2,4 => find out nearest greater to right then answer is => -1,-1,3,-1
//  1,3,0,0,1,2,4 =>  -1,-1,3,3,3,3,-1
let arr = [1,3,2,4];
// let arr = [1,3,0,0,1,2,4]

function nearestGreaterLeft(arr){
    let stack = [];
    let ans = [];
    for(let i = 0;i<arr.length;i++){
       while( stack.length > 0 && stack[stack.length-1] <= arr[i] && stack[stack.length-1] !== undefined ){
           stack.pop();
       }
       let top = stack[stack.length-1] !== undefined ? stack[stack.length-1]:-1;
       ans.push(top);
       stack.push(arr[i])
    }
   return ans
}

console.log(nearestGreaterLeft(arr))
