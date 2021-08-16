// var threeSum = function(nums) {
//    let sorted = nums.sort();

//     return sorted;
// };

// console.log(threeSum([-1,0,1,2,-1,-4]));

var search = function (nums, target) {
    //1.find the start point of the array through a binary search
    //2.check if target is in left or right of the start point
    //3. perform binary search using that half

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((right + left) / 2);
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    let start = left;
    left = 0;
    right = nums.length - 1;

    if (target >= nums[start] && target <= nums[right]) {
        //on right
        console.log("got here");
        left = start
    } else {
        //on left
        right = start;
    }
    while (left <= right) {
        let mid = Math.floor((left+right)/2);
        if (nums[mid] === target) {
            return mid
        }
        else if (target > nums[mid]) {
            //go right
            left = mid + 1;
        } else {
            //go left
            right = mid - 1;
        }
    }
    return -1;
};
let input = [3, 4, 5, 6, 0,1];
console.log(search(input, 3));