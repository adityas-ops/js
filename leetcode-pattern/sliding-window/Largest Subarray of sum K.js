let arr = [4, 1, 1, 1, 2, 3, 5];
let target = 5;

// function largestSub(arr, target) {
//   let i = 0;
//    let j = 0;
//   let sum = 0;
//   let ans = [];
//   while (j < arr.length) {
//     sum += arr[j];
//      console.log("j",j)
//     console.log("sum",sum)

//     if (sum === target) {
//         let tmt = j-i+1;
//       ans.push(tmt);
//        i++;
//        j=i;
//       sum = 0;
//     }else{
//         j++;
//     }
//   }
//   return ans;
// }

// function largestSub(arr, target) {
//   let i = 0;
//   let j = 0;
//   let sum = 0;
//   let ans = -Infinity;
//   while (j < arr.length) {
//     sum += arr[j];
//     if (sum < target) {
//       j++;
//     } else if (sum === target) {
//       let size = j - i + 1;
//       console.log("size",size)
//       ans = Math.max(size, ans);
//       j++;
//     } else {
//         if(sum > target){
//             while(sum > target){
//             sum-=arr[i];
//             i++;
//         }
//         }
//           j++;
//     }
  
//   }
//   return ans;
// }

function largestSub(arr, target) {
  let i = 0;
  let j = 0;
  let sum = 0;
  let ans = -Infinity;

  while (j < arr.length) {
    sum += arr[j];

    // Shrink window when sum exceeds target
    while (sum > target) {
      sum -= arr[i];
      i++;
    }

    // Check after shrinking
    if (sum === target) {
      let size = j - i + 1;
      console.log("size",size)
      ans = Math.max(size, ans);
    }

    j++;
  }

  return ans;
}

console.log(largestSub(arr, target));
