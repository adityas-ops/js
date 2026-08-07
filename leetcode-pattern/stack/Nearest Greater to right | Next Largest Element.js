

// arr = 1,3,2,4 => find out nearest greater to right then answer is => 3,4,4,-1
// 4,2,3,1
//  1,3,0,0,1,2,4 => 3,4,1,1,2,4,-1
// let arr = [1,3,2,4];
let arr = [1,3,0,0,1,2,4]

// brute force
function nearestGreaterRight(arr){
    let ans = [];
    for(let i = 0; i<arr.length;i++){
        let temp = -1;
        for(let j = i+1; j<arr.length;j++){
               if(arr[j]>arr[i]){
                temp = arr[j]
                break;
               }
        }
        ans.push(temp)
    }
    return ans;
}


// using stack for this question
function nearestGreaterRight1(arr){
    let stack = [];
    let ans = [];
    for(let i = arr.length-1;i>=0;i--){
       while( stack.length > 0 && stack[stack.length-1] <= arr[i] && stack[stack.length-1] !== undefined ){
           stack.pop();
       }
       let top = stack[stack.length-1] !== undefined ? stack[stack.length-1]:-1;
       ans.push(top);
       stack.push(arr[i])
    }
   return ans.reverse()
}

console.log(nearestGreaterRight(arr))
console.log(nearestGreaterRight1(arr))