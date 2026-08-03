
let arr = [55,10,70,35]

// return index of peak element
// peak element is the element which is greater then it's nightbors 
// so 5,10,20,15 => 20 is the answer


function checkPeak(arr) {
    // Guard: empty or single element
    if (!arr || arr.length === 0) return -1;
    if (arr.length === 1) return 0;

    let start = 0, end = arr.length - 1;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);

        // Treat boundaries as -Infinity so edge elements can be peaks
        let leftVal  = mid > 0              ? arr[mid - 1] : -Infinity;
        let rightVal = mid < arr.length - 1 ? arr[mid + 1] : -Infinity;

        if (arr[mid] > leftVal && arr[mid] > rightVal) {
            return mid; // Valid peak found
        } else if (leftVal > arr[mid]) {
            end = mid - 1; // Peak must be on the left
        } else {
            start = mid + 1; // Peak must be on the right (arr[mid+1] > arr[mid])
        }
    }

    return -1;
}

console.log("ans",checkPeak(arr));
