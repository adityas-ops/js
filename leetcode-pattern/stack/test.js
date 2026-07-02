let str = ["reflower","flow","flight"]


const findIndex = (arr)=>{

    let miniL = arr[0].length
    for(let i = 1; i<arr.length;i++){
        if(arr[i].length <miniL){
            miniL = arr[i].length;
        }
    }
    return miniL;
}

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }
  if (strs.length === 1) {
    return strs[0];
  }

//   1st check which string is lowest 
let ll = findIndex(strs)
let newArr = strs.map((item)=>item.slice(0,ll))
  let arr = newArr[0];
  let ans = ''
   newArr.shift()
  for(let i = 0; i<arr.length;i++){
     temp = arr.slice(0,i+1);
        let a = newArr.filter((item)=>item.includes(temp))
         console.log('temp',temp)
        console.log('a',a)
        console.log('newarr',newArr)
       
        if(a.length === newArr.length){
            console.log("this is hit")
            if(temp.length > ans.length){
                console.log("this is also hit")
                ans = temp;
            }
        }
  }
  return ans;
};

console.log("ans->",longestCommonPrefix(str));

// console.log("aditya".includes('ay'))
