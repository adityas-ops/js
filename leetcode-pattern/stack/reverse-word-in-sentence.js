
//  s = "the sky is blue"
//  ans = blue is sky the

 let s = "the  sky is blue"

 console.log(reverseStr(s))

 function reverseStr(s){
 let arr = s.split(" ")
 console.log(arr)

 let brr = [];

 for(let i = 0; i<arr.length;i++){
    if(arr[i].length > 0){
        brr.push(arr[i])
    }
 }

 brr.reverse()
  return brr.join(" ")
 }



// let s = "   fly me   to   the moon  "

// let arr = s.split(/\s+/)
// console.log(arr)