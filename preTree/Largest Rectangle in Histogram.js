

let  heights = [2,1,5,6,2,3]




function nearestSmallestLeft(arr){
    let stack = [];
    let ans = [];
    for(let i = 0;i<arr.length;i++){
       while( stack.length > 0 && arr[stack[stack.length-1]] >= arr[i] && arr[stack[stack.length-1]] !== undefined ){
           stack.pop();
       }
       let top = stack[stack.length-1] !== undefined ? stack[stack.length-1]:-1;
       ans.push(top);
       stack.push(i)
    }
   return ans
}


function nearestSmallestRight(arr) {
  const stack = [];
  const ans = new Array(arr.length);

  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    ans[i] = stack.length > 0 ? stack[stack.length - 1] : arr.length;
    stack.push(i);
  }
  return ans;
}


var largestRectangleArea = function(heights) {
    let Maxi = 0;
    let nsrLeft = nearestSmallestLeft(heights)
     let nsrRight = nearestSmallestRight(heights)
    for(let i = 0; i<heights.length;i++){
        let width = nsrRight[i]-nsrLeft[i]-1;
        let area = width*heights[i];
       Maxi = Math.max(area,Maxi)
    }
   return Maxi
};


console.log('ans',largestRectangleArea(heights))