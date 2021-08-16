var uniquePaths = function (r, c) {
    let total = 0;
    let memo = {};

    let helper = (row, col) => {
        if (row <= 0 || row > r || col <= 0 || col > c) return 0;
        if (memo[row + "_" + col]) return memo[row + "_" + col];
        if (row === r && col === c) {
            return 1;
        }

        total = helper(row + 1, col) + helper(row, col + 1);
        if (!memo[row + "_" + col]){
            memo[row + "_" + col] = total;
        }
        return total
    }
    return helper(1, 1);
};

console.log(uniquePaths(3, 7))
//output: 28
console.log(uniquePaths(3, 2))
// output: 3
console.log(uniquePaths(3, 3))
// output: 6
console.log(uniquePaths(23, 12))
console.log(uniquePaths(1, 1))