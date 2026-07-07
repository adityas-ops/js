

let s = " "


const isAlphaNumeric = char => {
  if (char.length !== 1) return false;
  const code = char.charCodeAt(0); 
  return (code >= 48 && code <= 57) ||   // 0-9
         (code >= 65 && code <= 90) ||   // A-Z
         (code >= 97 && code <= 122);    // a-z
};

var isPalindrome = function(s) {
    let str = '';
    
    for (let i = 0; i < s.length; i++) {
        if (isAlphaNumeric(s[i])) {
            str += s[i].toLowerCase();
        }
    }
    
    let n = str.length;
    if (n === 0 || n === 1) return true; // single char IS a palindrome
    
    let left = 0, right = n - 1;
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
};

console.log(isPalindrome(s))

