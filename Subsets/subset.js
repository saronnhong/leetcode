//https://leetcode.com/problems/subsets/
var subsets = function (nums) {
    let results = [];

    var helper = function (arr, round) {
        if (round === nums.length) {
            results.push(arr);
            return;
        }
        helper(arr, round + 1);
        helper(arr.concat(nums[round]), round + 1);
    }
    helper([], 0);
    return results;
};
let input = [1, 2, 3]
console.log(subsets(input));