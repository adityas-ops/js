s = "leetcode"



isVowel = (c)=>{
    let target = c.toLowerCase();
let vowels = 
    ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(target)
}

var reverseVowels = function(s) {
  let i = 0;
  let j =  s.length-1;
  let arr = s.split('')
  while(i<j){
    if(isVowel(arr[i]) && isVowel(arr[j])){
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        i++;
        j--;
    }else if(isVowel(arr[i]) === true && isVowel(arr[j]) === false){
        j--;
    }else if(isVowel(arr[i]) === false && isVowel(arr[j]) === true){
        i++;
    }else{
        i++;
        j--;
    }
  } 
  return arr.join('') 
};

console.log(reverseVowels(s))



// "AceCreIm"