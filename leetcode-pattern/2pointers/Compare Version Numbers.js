

// let  version1 = "1.0.1", version2 = "1"

// let version1 = "1.01", version2 = "1.001"

// let  version1 = "1.0", version2 = "1.0.0.0"

// let version1 = "7.5.2.4", version2 = "7.5.3"

let version1 = "1" ,version2 = "1.1"


var compareVersion = function(version1, version2) {
    let arr1 = version1.split('.')
     let arr2 = version2.split('.')
     let i = 0; 
     let mxL = arr1.length > arr2.length ? arr1.length :arr2.length
     while( i< mxL){
       let a = arr1[i] === undefined ? 0:+arr1[i]
        let b = arr2[i] === undefined  ? 0 : +arr2[i]
        // console.log('a',a)
        // console.log('b',b)
        if(a<b){
            return -1
        }else if(a>b){
            return 1
        }
      
        i++
     }
     return 0;
};

console.log(compareVersion(version1,version2))