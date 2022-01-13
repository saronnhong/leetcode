let threeSum = (arr) => {
    let sortedArr = arr.sort((a,b)=> a-b);
    console.log(sortedArr);
    let totalResults = [];

    for (let k = 0; k < sortedArr.length; k++) {
        if(sortedArr[k] === sortedArr[k-1]) continue;

        let target = 0 - sortedArr[k];
        let hash2Sum = {};
        
        for (let i = k+1; i < sortedArr.length; i++) {
            let compliment = target - sortedArr[i];
            if (!hash2Sum[compliment]) {
                hash2Sum[sortedArr[i]] = 1;
            } else {
                totalResults.push([sortedArr[i], compliment, sortedArr[k]])
            }
        }
    }
    return totalResults;
}


let nums = [-1, 0, 1, 2, -1, -4];
// let nums = [-4, -2, 0, -3, 1, 2]
//Output: [[-1,-1,2],[-1,0,1]]
console.log(threeSum(nums))
// console.log(twoSum(nums, 1, 0))