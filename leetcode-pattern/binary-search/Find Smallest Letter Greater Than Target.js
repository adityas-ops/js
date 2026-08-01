let letters = ["c","f","j"], target = "j";


var nextGreatestLetter = function(letters, target) {
  let start = 0;
  let end = letters.length - 1;
  let res = letters[0];

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (letters[mid] === target){
       start = mid+1
    }
    else if (letters[mid] > target) {
      res = letters[mid]; 
      end = mid - 1;
    }

    else {
      start = mid + 1; 
    }
  }
  return res;
}

console.log('====================================');
console.log(nextGreatestLetter(letters,target));
console.log('====================================');