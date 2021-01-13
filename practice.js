// find all duplicates in an array and sort by most occurrences
const sample01 = [1, 2, 3, 4]
const sample02 = [0, 1, 0, 2]
const sample03 = []
const sample04 = [1, 2, 3, 4, 1, 2, 1, 2, 1, 2, 3, 10, 10, 9, 9, 9, 9,9]

function sortDups(arr) {
    let hash = {};
    let sortedArr = arr.sort();
    let max = 0;

    for (let i = 0; i < sortedArr.length; i++) {
        if (!hash[sortedArr[i]]) {
            hash[sortedArr[i]] = 1;

        } else {
            hash[sortedArr[i]]++;

        }
        if (hash[sortedArr[i]] > max) {
            max = hash[sortedArr[i]];
        }
    }
    let newArr = [];
    for (let j = max; j > 0; j--) {
        for (var key in hash) {
            if (hash[key] === j) {
                for (let k = 0; k < hash[key]; k++) {
                    newArr.push(key);
                }
            }
        }
    }

    return console.log(newArr);
}

sortDups(sample04);