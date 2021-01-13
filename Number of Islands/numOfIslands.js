//https://leetcode.com/problems/number-of-islands/
// 200. Number of Islands
// Medium

// 7358

// 229

// Add to List

// Share
// Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    let row = grid.length;
    let col = grid[0].length;
    
    function helper(i, j){
        //base case
        if(i < 0 || j < 0 || i >= row || j >= col){
            //out of bounds
            return;
        }
        if(grid[i][j] === "0"){
            return;
        }
        
        if(grid[i][j] === "1"){
            grid[i][j] = "0";
        }
        
        //recursive
        helper(i-1, j);
        helper(i+1, j);
        helper(i, j-1);
        helper(i, j+1);
    }
    
    
    for(let i=0; i<row ; i++){
        for(let j=0; j<col; j++){  
            if(grid[i][j] === "1"){
                helper(i, j);
                count++;
            }
            
        }
    }
    return count;
};