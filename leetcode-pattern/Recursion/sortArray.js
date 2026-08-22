

let arr = [5,4,3,1,2,8,9];

function sorting(arr) {
    if(arr.length === 0){
        return;
    }
    let poped = arr.pop()
    console.log('pop',poped)
    //   arr.push(poped)
    sorting(arr)
  
    // sorting(arr)

   
}

sorting(arr)

console.log(arr)