function largestSub(arr, target) {
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
