// Given a 2d array containing 1s and 0s where 1 means the server has been updated and 0 means the server has not been updated determine the number of days it takes to update all of the servers if servers can only update adjacent servers (up, down, left, right) and it takes an entire day to update a server.

let serverUpdate = (matrix) => {
    let queue = [];
    let count = 0;

    let traverseMatrix = () => {
        while(queue.length > 0){
            let isAdd = false;
            let temp = queue.shift()
            let row, col;
            [row, col] = temp;
            //checks for out of bounds and value = 1
            if(row+1 >= 0 && row+1 < matrix.length && col >= 0 && col < matrix[0].length && matrix[row+1][col] === 1){
                queue.push([row+1,col]);
                matrix[row+1][col] = 0;
                isAdd =true;
            }
            if(row-1 >= 0 && row-1 < matrix.length && col >= 0 && col < matrix[0].length && matrix[row-1][col] === 1){
                queue.push([row-1,col]);
                matrix[row-1][col] = 0;
                isAdd =true;
            }
            if(row >= 0 && row < matrix.length && col+1 >= 0 && col+1 < matrix[0].length && matrix[row][col+1] === 1){
                queue.push([row,col+1]);
                matrix[row][col+1] = 0;
                isAdd =true;
            }
            if(row >= 0 && row < matrix.length && col-1 >= 0 && col-1 < matrix[0].length && matrix[row][col-1] === 1){
                queue.push([row,col-1]);
                matrix[row][col-1] = 0;
                isAdd =true;
            }
            if(isAdd === true){
                count++;
            }
        }
    }

    for(let r=0; r<matrix.length; r++){
        for(let c=0; c<matrix[0].length; c++){
            if(matrix[r][c] === 1){
                queue.push([r,c]);
                count++
                traverseMatrix();
            }
        }
    }
    return count;
}
let servers01 = [[0, 1, 0], [1, 1, 1], [1, 1, 0]];
let servers02 = [[1, 1, 0], [1, 0, 0], [1, 1, 0]];
let servers03 = [[1, 0, 0], [1, 0, 0], [1, 1, 1]];
// 5

console.log(serverUpdate(servers03));