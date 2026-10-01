
let nums1 = [1,2], nums2 = [3,4]


var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;
    let arr = [];
    let i = 0;
    let j = 0;
    let k = 0;
    while(i<m && j <n){
        if(nums1[i] < nums2[j]){
            arr[k] = nums1[i]
            k++;
            i++;
        }else{
             arr[k] = nums2[j];
             k++;
             j++;
        }
    }
 
    while(i < m){
        arr[k] = nums1[i];
        i++;
        k++;
    }
      while(j < n){
        arr[k] = nums2[j];
        j++;
        k++;
    }
    
       console.log('arr1',arr[Math.floor(arr.length/2)])
       console.log('arr2',arr[Math.ceil(arr.length/2)+1])
    return arr.length%2 === 0 ?(arr[Math.floor(arr.length/2)]+arr[Math.floor(arr.length/2)-1])/2.0 : arr[Math.floor(arr.length/2)]
    
};

console.log(findMedianSortedArrays(nums1,nums2))