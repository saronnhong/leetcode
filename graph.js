let graph = function (pairs){
    let adjList ={};
    
    
    for(let i=0; i<pairs.length; i++){
        if(!adjList[pairs[i][0]]){
            adjList[pairs[i][0]] = [];
            adjList[pairs[i][0]].push(pairs[i][1]);
        }else{
            adjList[pairs[i][0]].push(pairs[i][1]);
        }
    }
    for(let node in adjList){
        for(let i=0; i<adjList[node].length; i++){
            let visited={};
            let n = adjList[node][0];
            if(!adjList[n]){
                return;
            }else{
                
            }
        }
    }
}
graph([[1,2],[1,3],[1,4],[2,5],[3,6],[4,3], [4,6],[5,6]])