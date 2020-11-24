//reverse an array recursively
//input = [0,1,2,3,4,5]
//output = [5,4,3,2,1,0]
let input = [0, 1, 2, 3, 4, 5];

function reverseArray(array) {

    function helper(arr, i) {
        if (arr.length / 2 < i) return arr;

        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
        helper(arr, i+1);
    }

    helper(array, 0);
    return array;
}
console.log(reverseArray(input));