// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

//1.Find all multiples of 3 and 5
//2.Take the sum of these numbers

// Psuedo Code
//1. iterate through til reach target range
//2. check if divisble by 3 or 5, if yes, add value to TotalSum
//3. continue til reach target
//4. return the sum

//Time Complexity: O(N)
//Space Complexity: O(1)


let sumOfMultiple = max => {
    let totalSum = 0;
    currNum = 1;

    while (currNum < max) {
        if ((currNum % 3 === 0) || (currNum % 5 === 0)) {
            totalSum += currNum;
        }
        currNum++;
    }

    return totalSum;
}

console.log(sumOfMultiple(10));
// answer = 23
console.log(sumOfMultiple(1000));
console.log(sumOfMultiple(-10));
// answer = 0;