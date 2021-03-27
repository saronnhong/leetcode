let wordCount = function(word){
    let newWord = word.replace(/[^-0-9a-zA-Z ]/g, "").toLowerCase().split(" ");
    let hash={};
    let newArr=[];
    
    for(let i=0; i<newWord.length; i++){
        if(!hash[newWord[i]]){
            hash[newWord[i]] = 1;
        }else{
            hash[newWord[i]]++;
        }
    }

    for(let item in hash){
        newArr.push(item + " " + hash[item]);
    }

    let bubbleSort = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    };
    newArr = bubbleSort(newArr);
    let resultArr =[];
    for(let i=0; i<newArr.length; i++){
        let temp =[];
        temp.push(newArr[i])
        resultArr.push(temp);
    }
    return console.log(resultArr);
}
wordCount("hello my friend hello a a a");

// let randomFunc = function(m, n) {
//     let newVal=[];
//     for(let i=0; i<m; i++){
//         newVal.push(Math.floor(Math.random() * Math.floor(n)));
//     }
//     return console.log(newVal);
// }

// randomFunc(5, 10)