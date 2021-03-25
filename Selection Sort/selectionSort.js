let selectionSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min != i) {
            let temp = arr[i]
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }

    return arr;
}
let input = [9, 4, 1, 2, 4, 2, 8, 99, 88];

console.log(selectionSort(input))