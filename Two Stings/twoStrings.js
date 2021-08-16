/*
   - Two strings
    Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.
    Note that after backspacing an empty text, the text will continue empty.
    
        Examples:
    No.1: 
    Input: S = "ab#c", T = "ad#c"
    Output: true
    Explanation: Both S and T become "ac".
    No.2:
    Input: S = "ab##", T = "c#d#"
    Output: true
    Explanation: Both S and T become "".
    No.3: 
    Input: S = "a#c", T = "b"
    Output: false
    Explanation: S becomes "c" while T becomes "b".
    
    1. iterater through the first string, look for the #.
    2. if we find the #, we delete the previous character
    3. repeat the second string
    4. compare the two strings to see if they are both equal.
*/

let twoStrings = (S, T) => {
    let string1 = removeHash(S);
    let string2 = removeHash(T);

    if (string1 === string2) {
        return true;
    }
    return false
}
let removeHash = (name) => {
    let temp = [];
    for (let i = 0; i < name.length; i++) {
        if (name[i] !== "#") {
            temp.push(name[i]);

        } else {
            temp.pop();
        }
    }
    return temp.join("");
}
let unitTest = () => {
    let count = 0;
    if (twoStrings("ab#c", "ad#c") === true) {
        count++;
    }
    console.log('1. twoStrings("ab#c", "ad#c") ' + twoStrings("ab#c", "a#c"))
    if (twoStrings("a##c", "#a#c") === true) {
        count++;
        console.log('2. twoStrings("a##c", "#a#c")' + ' Pass')
    }

    return count === 2 ? "Pass" : "Fail";
}

// console.log(unitTest());
// console.log(twoStrings("ab#c", "ad#c"));
// console.log(twoStrings("ab##", "c#d#"));
// console.log(twoStrings("a#c", "b"));
// console.log(twoStrings("a##c", "#a#c"));

