// 0 1 1 0
// 0 0 0 1

// 0 1 1 1
// 0 0 1 0
// 1 1 1 0

// 1 1 0
// 0 0 0
// 1 1 1


//return size of largest island

//base case: 
// 1. out of bounds
// 2. if 0 return
//recursive case:
// if we find a 1 thats not in the visited hashtable

let largestIsland = (matrix) => {
    let maxSize = 0;
    let visited = {};
    
    
    let traverse = (r,c, size) =>{
      if(visited[r + "_" + c]) return;
      if((c < 0 || c >= matrix[0].length) || (r < 0 || r >= matrix.length)) return;
      if(matrix[r][c] === 0) return;
      
      let temp = r + "_" + c;
      visited[temp] = 1;
    
      
      traverse(r-1, c, size +1);
      traverse(r+1, c, size +1);
      traverse(r, c-1, size +1);
      traverse(r, c+1, size +1);
      
      if(size > maxSize){
        maxSize = size;
      }
    }
    
    for(let i=0; i<matrix.length; i++){
      for(let j=0; j<matrix[0].length; j++){
        if(!visited[i + "_" + j] && matrix[i][j] === 1){
          traverse(i, j, 1);
        }
      }
    }
    
    return maxSize;
    
  }
               
  let input = [
              [0,1,1,0],
              [0,0,0,1]
  ]
  console.log(largestIsland(input));