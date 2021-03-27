let merge = (left, right) => {
    let arr = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            arr.push(left.shift());
        }else{
            arr.push(right.shift());
        }
    }
    return [...arr, ...left, ...right]
}
// console.log(merge([1,3,6],[2,4,8]));

let mergeSort = (array) => {
    const half = array.length/2;

    if(array.length < 2) {
        return array;
    }

    const left = array.splice(0,half);
    return merge(mergeSort(left), mergeSort(array));
}
let input=[1,2,5,2,3,8,4,3,2,55,88,22,99]
console.log(mergeSort(input))