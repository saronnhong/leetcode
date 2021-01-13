var mostCommonWord = function(paragraph, banned) {
    //1. delete banned words
    //2. delete puntuations
    //3. iterate and add to hash and keep track of max

    let newParagraph = paragraph.replace(/[^a-zA-Z ]/g, " ").toLowerCase().split(" ");
    for(let j=0; j<banned.length; j++){
        newParagraph = newParagraph.filter(word => word != banned[j]);
    }
    newParagraph = newParagraph.filter(word => word != "");
    console.log(newParagraph);
    let hash={};
    let max=0;
    let maxLetter;
    for(let i=0; i<newParagraph.length; i++){
        if(!hash[newParagraph[i]]){
            hash[newParagraph[i]] = 1;
        }else{
            hash[newParagraph[i]]++;
        }
        if(hash[newParagraph[i]] > max){
            max = hash[newParagraph[i]];
            maxLetter = newParagraph[i];
        }
    }
    console.log(maxLetter);
};

mostCommonWord("Bob. hIt, baLl", ["bob", "hit"]);