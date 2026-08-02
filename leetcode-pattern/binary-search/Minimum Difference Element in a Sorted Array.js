

let arr = [4,6,10];
let key = 4;

// find the minimum absolute difference element from array 
// 4-7 = 3, 6-7 = 1, 10-7=3
// then answer is 6 because it 

// you need to find element ceil and floor and then diff which diff is less tha's is the answer


function findFloor(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let res = -1; 

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === target) return arr[mid];

    else if (arr[mid] < target) {
      res = arr[mid]; 
      start = mid + 1;
    }

    else {
      end = mid - 1;
    }
  }
  return res;
}

function findCeil(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let res = -1; 

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === target) return arr[mid];

    else if (arr[mid] > target) {
      res = arr[mid]; 
      end = mid - 1;
    }

    else {
      start = mid + 1; 
    }
  }
  return res;
}


function findNumber(arr,key){
 let ceil = findCeil(arr,key);
 let floor = findFloor(arr,key)
  return Math.min(ceil,floor)
} 


console.log('ans',findNumber(arr,key))