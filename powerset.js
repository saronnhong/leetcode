let powerSet = (string) => {
    let results = [];

    let recurse = (word, index) => {
        if(index === string.length){
            if(word.length > 0) results.push(word);
            return 
        }

        recurse(word, index+1);
        recurse(word+string[index], index+1);
    }

    recurse("", 0);

    return results;
}

let input = "abc"
//output = [a,b,c,ab,ac,bc,abc]
console.log(powerSet(input));