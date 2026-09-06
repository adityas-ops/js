let str1 = "listen",  str2 = "silent"

function validAnagram(str1,str2){
    
    return str1.split('').sort().join('') === str2.split('').sort().join('')
}

console.log(validAnagram(str1,str2))