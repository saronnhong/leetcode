//1. check for value parenthesis input = "([]{})"

// 2.Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// ```
// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ] 
// ```

// fn(1) -> ["()"]
// fn(2) -> ["(())", "()()"]
// fn(3) -> ["((()))", "(()())", "(())()", "()(())", "()()()"]
                // 1           2         1.         1       2

//1. add to the outsides
//2. add a pair "()", in front, and in back

let allCombos = (n) => {
    let results = [];
    let hash = {};
    
    let helper = (outputString, level) => {
      if(level === n) {
        if(!hash[outputString]){
          hash[outputString] = 1;
          results.push(outputString);
        }   
        return;
      }
    
      helper("(" + outputString +")", level + 1);
      helper("()" + outputString, level + 1);
      helper(outputString + "()", level + 1);
    }
    
    helper("()", 1);
    
    return results;
    
    
  }
  console.log(allCombos(1))
  console.log(allCombos(2))
  console.log(allCombos(3))