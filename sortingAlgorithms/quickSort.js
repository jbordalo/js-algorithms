function pivot(arr, start = 0, end = arr.length-1) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    const pivot = arr[start];
    let swapIndex = start;

    for (let i = start+1; i <= end; i++) {
        if(pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }

    // Swap pivot
    swap(arr, start, swapIndex);
    return swapIndex;
}

// O(n log n)
function quickSort(arr, left = 0, right = arr.length-1) {
    if (left < right) {
        const pivotIndex = pivot(arr, left, right);
        // left
        quickSort(arr, left, pivotIndex-1);
        // right
        quickSort(arr, pivotIndex+1, right);
    }
    return arr;
}