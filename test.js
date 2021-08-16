let testString = "This letter is, to express my interest in the, Full Stack JavaScript Engineer position."

function toArr(str) {
    // let newstr = str.replace(/[a-n]/g, "X");
    // let newstr = str.split(", ");
    // return newstr;
    let temp = null;
    let var1=-8;
    let var2=6;
    if(var1 < null){
        return true;
    }
    return false;
}

// console.log(toArr(testString));

let reverseString = (str) => {
    var str1 = str.split("");
    let len = str1.length - 1;
    let helper = (string, start, end) => {
        if(start >= end) return str1.join("");

        let temp = string[start];
        string[start] = string[end];
        string[end] = temp;
        
        return helper(string, start +1, end -1);
    }
    return helper(str1, 0, len);
    
}

// console.log(reverseString("ayemi"));
// var reverseStringPointers = function(s) {
//     let temp="";
//     for(let i=0; i< s.length/2; i++){
//         temp = s[i];
//         s[i] = s[s.length - i - 1];
//         s[s.length - i - 1] = temp;
//     }
//     return s;
// };
// console.log(reverseStringPointers([1,2,3,4]));

var reverseStr = function(s, k) {
    let arr = s.split('')
    
    for(let i=0; i < k/2; i++){
        let temp = arr[i];
        arr[i] = arr[k - i - 1];
        arr[k - i - 1] = temp;
    }
    return arr.join('');  
};
console.log(reverseStr("abcdefghi", 4))