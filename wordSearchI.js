// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

let wordSearch = (board, keyWord) => {
    let results = false;

    let traverseBoard = (row, col, visited, wordIndex) => {
        if(wordIndex >= keyWord.length){
            results = true;
            return;
        }
        if(row < 0 || row >= board.length || col < 0 || col >= board[0].length) return;
        if(visited[row + "_" + col]) return;
        if(board[row][col] !== keyWord[wordIndex]) return;
        
        
        console.log(visited, wordIndex);
        visited[row + "_" + col] = 1;
        traverseBoard(row+1, col, visited, wordIndex+1);
        traverseBoard(row-1, col, visited, wordIndex+1);
        traverseBoard(row, col+1, visited, wordIndex+1);
        traverseBoard(row, col-1, visited, wordIndex+1);
    }

    for(let r=0; r<board.length; r++){
        for(let c=0; c<board[0].length; c++){
            if(keyWord[0] === board[r][c]){
                traverseBoard(r, c, {}, 0)
            }
        }
    }

    return results;
}
// let matrix = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
// let word = "ABCCED";
//true

// let word = "SEE"
//true

// let word = "ABCB";
//false

let matrix = [["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]];
let word = "ABCESEEE";

console.log(wordSearch(matrix, word));
