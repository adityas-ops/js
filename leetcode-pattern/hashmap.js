
// practice 
let arr = [1,2,3,4,5,3,2,4,5,6,5,5,5,5,5];


let hs = {}

// test purpose 
for(const i in arr){
    let b = arr[i]
   if(hs.hasOwnProperty(b)){
    hs[b].push(b)
   }else{
    hs[b] = [b]
   }
}

console.log(hs)

// count each key duplicates 

let c = {};
for(const i in arr){
  let a = arr[i]
  c[a] = (c[a]||0)+1
}

console.log('count',c)
