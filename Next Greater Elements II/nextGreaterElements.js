// Given a circular array (the next element of the last element is the first element of the array), print the Next Greater Number for every element. The Next Greater Number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, output -1 for this number.

// Example 1:
// Input: [1,2,1]
// Output: [2,-1,2]
// Explanation: The first 1's next greater number is 2; 
// The number 2 can't find next greater number; 
// The second 1's next greater number needs to search circularly, which is also 2.
// Note: The length of given array won't exceed 10000.
// https://leetcode.com/problems/next-greater-element-ii/

var nextGreaterElements = function (nums) {
    let resultArr = [];
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let k = j;
        let isDone = false;
        while (k < i + nums.length && isDone === false) {
            if (j >= nums.length) {
                k = j - nums.length
            }
            if (nums[i] < nums[k]) {
                resultArr.push(nums[k]);
                isDone = true;
            }
            k++;
            j++;
        }
        if (isDone === false) {
            resultArr.push(-1);
        }
    }
    console.log(resultArr);
    return resultArr;
};

let example1 = [1,2,1];
nextGreaterElements(example1);