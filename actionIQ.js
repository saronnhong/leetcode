/**
Given a list of words, bucket the words that are anagrams of each other and print them out, one anagram per line.  Anagrams are words that, when the letters are rearranged, can spell each other.

INPUT = ["cat", "tab", "tac", "bat", "act", "ogod", "good", "a"]
OUTPUT = [ ["cat", "tac", "act"], ["tab", "bat"], ["ogod", "good"], ["a"] ]

Function Definition: void bucket_anagram(List<String> words);
**/
//1. iterate through the input array
//2. create a hash table for the characters and keep count of how many times each appear
//3. iterate through the array and check if number of characters match the same
//4. any that matches, push to that new array and remove from the input array
//5. 

// N = length of list
// M = size of a word

// Runtime and memory/space complexity? o(...)
//
// ['abcde....z']
//

let anagramList = (input) => {
    let mainHash={}; //<Hash<char,int>, list>
    
    for(let word in input){
      let hash = {}; // Hash<char,int>
      for(let item in word){
        
        if(!hash[item]){
          hash[item] = 1;
        }else{
          hash[item] +=1;
        }
    
      }
      if(!mainHash[hash]){
        mainHash[hash] = {};
      }
      mainHash[hash].append(word);
  
    }
    
  }
  
  
  /**
  Print a binary tree one level at a time, with a newline between each level.
  
       a
      / \
     b   c
    /   / \
   d   e  f
    \    /
     g   h
  
  Output:
  
  a
  b c
  d e f
  g h
  
  
  
  
  public class BinaryTreeLevels {
    static class Node {
      Node left;
      Node right;
      char ch;
  
      public Node(char c, Node l, Node r) {
        ch = c;
        left = l;
        right = r;
      }
    }
  **/
  queue=[d,e,f]
  
  queue=[a]
  q2=[b c]
  q3=[d e f]
  q4=[g h]


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