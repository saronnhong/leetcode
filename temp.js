// var twoSum = function(nums, target) {
//     let targetHash={};
//     for(let i=0; i<nums.length; i++){
//         if(!targetHash[nums[i]]){
//             targetHash[nums[i]] = i;
//             console.log(targetHash);
//         }
//         let targetFound = target - nums[i];
//         console.log(targetFound, nums[i]);
//         if((targetHash[targetFound]) && (targetFound != nums[i])){
//             return [targetHash[targetFound], i];
//         }
//     }
// };

// // console.log(twoSum([3,2,4], 6));
// let test = () => {
//     let a =[1,2,3];
//     let b =[1,2,3];
//     if( a.toString() === b.toString()) return [a.toString(), b]
//     return false;
// }
// console.log(test());

let hash = {
    a: 1,
    b: 2
}
let hash2 = {
    c: 1,
    d: 2
}
let dictionary = {};
dictionary[hash] = hash;
// dictionary[hash2] = hash2;
console.log(dictionary);
