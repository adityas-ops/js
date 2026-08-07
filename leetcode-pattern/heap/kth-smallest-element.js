let arr = [7, 10, 4, 3, 20, 15, 5];
let k = 3;

function findKSmallest(arr, k) {
    let heap = [];
    
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];
        heap.push(key);
        heapifyDown(heap); // maintain max-heap property
        
        if (heap.length > k) {
            heap[0] = heap[heap.length - 1];
            heap.pop();
            heapifyDown(heap);
        }
    }
    
    return heap[0]; // the k-th smallest element
}

function heapifyDown(heap) {
    let i = 0;
    while (2 * i + 1 < heap.length) {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        
        if (heap[left] > heap[largest]) largest = left;
        if (right < heap.length && heap[right] > heap[largest]) largest = right;
        
        if (largest !== i) {
            [heap[i], heap[largest]] = [heap[largest], heap[i]];
            i = largest;
        } else {
            break;
        }
    }
}

console.log(findKSmallest(arr, k)); // Output: 5 (correct! k=3 smallest are 3,4,5)