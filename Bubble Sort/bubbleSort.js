let bubbleSort = arr => {
    let swapped = false;
    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    }
    while (swapped)

    return arr;

}

let input = [9, 4, 1, 2, 4, 2, 1, 8, 99];

console.log(bubbleSort(input))