// Write a function to check a student's solution to a skip-counting crossword.  
// It should take a solved skip counting crossword and return true if the puzzle is solved correctly, 
// or false if the puzzle is solved incorrectly.
const basicSolved = [
    [23, 28, 33],
    [19, 18, 17],
    [15, 8, 1]
];

const basicIncorrect = [
    [23, 28, 33],
    [19, 18, 17],
    [16, 8, 1]
];

let skipCount = answer => {
    for (let r = 0; r < answer.length; r++) {
        let diff = answer[r][1] - answer[r][0];
        for (let c = 0; c < answer[0].length - 1; c++) {
            let diff_vert = answer[1][c] - answer[0][c];
            if ((answer[r][c] + diff) !== answer[r][c + 1]) return false;
            if ((r < answer[0].length - 1) && (answer[r][c] + diff_vert) !== answer[r + 1][c]) return false;
        }
    }

    return true;
}

console.log(skipCount(basicSolved));
console.log(skipCount(basicIncorrect));