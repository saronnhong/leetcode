// https://leetcode.com/problems/longest-valid-parentheses/

// 32. Longest Valid Parentheses
// Hard
// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

// Example 1:
// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".

// Example 2:
// Input: s = ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()".

// Example 3:
// Input: s = ""
// Output: 0
 

// Constraints:
// 0 <= s.length <= 3 * 104
// s[i] is '(', or ')'.

var longestValidParentheses = function(s) {
    let stack = [];
    let resultArr = [];
    for(let i = 0; i < s.length; i++){
        if(stack.length === 0 && s[i] === ')'){
            resultArr[i] = false;
        }else if(s[i] === '('){
            stack.push(i);
        }else if(s[i] === ')'){
            let temp = stack.pop();
            resultArr[i] = true;
            resultArr[temp] = true;
        }
    }
    while(stack.length > 0){
        let temp = stack.pop();
        resultArr[temp] = false;
    }
    //search for MAX consecutive Trues in the Results Array
    let max = 0;
    let count = 0;
    for(let j=0; j < resultArr.length; j++){
        if(resultArr[j] === true){
            count++;
            if (count > max){
                max = count;
            }
        }else{
            count = 0;
        }
    }
    console.log(max);
    return max;
};

longestValidParentheses("(()");
longestValidParentheses(")()())");
longestValidParentheses("");
