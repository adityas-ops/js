// const arr = [4, 2, [6, 3], [1, [9, 8] ] , 5]

// // // find max number in the array

// // const newArr = [...arr.flat(Infinity)]

// // console.log(Math.max(...newArr)) // 9

// function findMaxNumber(arr) {
//   var maxnum = Number.MIN_SAFE_INTEGER;
//   for (var i = 0; i < arr.length; i++) {
//     console.log("type", typeof arr[i]);
//     if (typeof arr[i] == "object") {
//       var num = findMaxNumber(arr[i]);
//       if (num > maxnum) maxnum = num;
//     } else if (arr[i] > maxnum) maxnum = arr[i];
//   }
//   return maxnum;
// }
// var maxnum = findMaxNumber(arr);

// console.log(maxnum);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = (array)=>{
      let s = 0;
      for(let i = 0; i<array.length;i++){
        s = s+array[i]
      }
      return s;
}

console.log(sum(arr))