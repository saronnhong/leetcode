// function solution(N) {
//     let nArr = N.toString();
//     let newArr=[];
//     let hasInserted = false;
//     for (let i = 0; i < nArr.length; i++) {
//         if ((nArr[i] <= 5) && hasInserted === false) {
//             newArr.push("5");
//             hasInserted = true;
//         }
//         newArr.push(nArr[i])
//     }
//     let result ="";
//     for(let j=0; j< newArr.length; j++){
//         result = result + newArr[j];
//     }
    

//     return console.log(parseInt(result));
// }

// solution(276);

// function solution(S, K) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
//     let indexOfDay = 0;
//     for(let i=0; i<days.length; i++){
//         if(S === days[i]){
//             indexOfDay = i
//         }
//     }

//     let newK = K % 7;
//     let result = (newK + indexOfDay) % 7
//     console.log(days[result])
// }
// solution("Wed", 23);

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let hash={};
    let balancedLetters = {};

    for(let i=0; i<S.length; i++){
        if(!hash[S[i]]){
            hash[S[i]] = 1;
        }
        if(hash[S[i].toLowerCase()] === 1 && hash[S[i].toUpperCase()] === 1){
            balancedLetters[S[i].toLowerCase()] = 1;
            balancedLetters[S[i].toUpperCase()] = 1;
        }
    }
    console.log(balancedLetters);

    let maxString = [];
    let currMax = [];
    for(let j=0; j<S.length; j++){
        if(!balancedLetters[S[j]]){
            
            maxString = []
        }else{
            maxString.push(S[j]);
        }
        if(maxString.length > currMax.length){
            currMax = maxString;
        }
        
    }
    if(currMax.length > 1){
        let stringMax = "";
        for(let k=0; k<currMax.length; k++){
            stringMax += currMax[k];
        }   
        console.log(stringMax);
    }else {
        console.log("-1")
    }
    

}
// solution("azABaabza");
// solution("TacoCat");
solution('AcZCbaBz');