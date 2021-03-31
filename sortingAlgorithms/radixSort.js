function getDigit(num, i) {
    return Math.floor(Math.abs(num)/Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
    let maxDigits = 0;
    for (let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }

    return maxDigits;
}

// O(nk)
function radixSort(arr) {
    let maxDigitCount = mostDigits(arr);
    for (let k = 0;k < maxDigitCount; k++) {
        const digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < arr.length; i++) {
            const digit = getDigit(arr[i], k);
            digitBuckets[digit].push(arr[i]);
        }
        arr = [].concat(...digitBuckets);
    }
    return arr;
}