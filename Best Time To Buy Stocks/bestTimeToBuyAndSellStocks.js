// 121. Best Time to Buy and Sell Stock
// Easy
// Say you have an array for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
// Note that you cannot sell a stock before you buy one.

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.
// Example 2:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.


// BRUTE FORCE
// Time Complexity = O(n^2)
// Space Complexity = O(1)
// var maxProfit = function(prices) {
//     let max = 0;
//     let curr_max = 0;
//     for(let i = 0; i < prices.length; i++){
//         for(let j = i+1; j < prices.length; j++){
//             curr_max = prices[j] - prices[i];
//             if(curr_max > max){
//                 max = curr_max;
//             }
//         }
//     }
//     return max;
// };

//ONE PASS
//Time Complexity = O(n)
//Space Complexity = O(1)
var maxProfit = function(prices) {
    let max_price = 0;
    let min_price = Number.POSITIVE_INFINITY;
    for(let i = 0; i < prices.length; i++){
        if(prices[i] < min_price){
            min_price = prices[i];
        }
        if(prices[i] - min_price > max_price){
            max_price = prices[i] - min_price;
        }
    }
    return max_price;
};