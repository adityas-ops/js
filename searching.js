




const arr = ["aditya","adit","moneky","ksdadia"]
const searchString = "adi"

function searchAlgo(search,arr){
    let searchStr = search.substring(0,3);
    let result = [];
    // only first 3 characters should be matched
    for(let i = 0; i < arr.length; i++){
        if(arr[i].substring(0,3) === searchStr){
            result.push(arr[i]);
        }
    }
   
    return result;

}

console.log(searchAlgo(searchString,arr))