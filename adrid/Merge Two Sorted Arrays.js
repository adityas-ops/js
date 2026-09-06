
let arr1 =[1,3,5,7], arr2 =[2,4,6]

function mergeSorted(arr1,arr2){
    let nums1 = arr1.length > arr2.length ? arr1 :arr2
     let nums2 = arr1.length > arr2.length ? arr2 :arr1
     let ans = []
    for(let i = 0; i<nums2.length;i++){
        if(nums1[i] >= nums2[i]){
            ans.push(nums2[i])
            ans.push(nums1[i])
        }else{
            ans.push(nums1[i])
              ans.push(nums2[i])
        }
    }
    return [...ans, ...nums1.slice(nums2.length,nums1.length)]
}

console.log(mergeSorted(arr1,arr2))