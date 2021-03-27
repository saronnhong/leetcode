let insertionSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
            j = j - 1;
        }
    }
    return arr;
}

let input = [9, 4, 1,2,55,99,10];

console.log(insertionSort(input))