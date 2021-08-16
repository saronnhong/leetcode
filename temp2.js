let INPUT = ["cat", "tab", "tac", "bat", "act", "ogod", "good", "a"]
// OUTPUT = [ ["cat", "tac", "act"], ["tab", "bat"], ["ogod", "good"], ["a"] ]

let anagramList = (input) => {
    let dictionary = {};
    let results = [];
    for (let i = 0; i < input.length; i++) {
        let sorted = input[i].split("").sort();
        if(!dictionary[sorted]){
            dictionary[sorted] = [];
        }
        dictionary[sorted].push(input[i]);
    }
    for(let item in dictionary){
        results.push(dictionary[item]);
    }
    return results;
}
console.log(anagramList(INPUT));