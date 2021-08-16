let twoLarge = (num1, num2) => {
    let carry = 0;
    let results = [];
    let results2 = [];

    let largerNumber = Math.max(num1, num2);
    num1 = num1.toString().split("").reverse();
    num2 = num2.toString().split("").reverse();

    for (let i = 0; i < largerNumber.toString().length; i++) {
        let temp = (parseInt(num1[i]) || 0) + (parseInt(num2[i]) || 0) + carry;
        (i < 9) ? results.push(temp % 10) : results2.push(temp % 10);
        (temp > 9) ? carry = 1 : carry = 0;
    }
    if (carry === 1) {
        results2.push(carry);
    }

    results2 = results2.reverse();
    let newResults = results2.concat(results.reverse()).join("")

    return newResults;

}
console.log(twoLarge(94610, 4832))
console.log(twoLarge(934512323239900, 999999999999999))
console.log(twoLarge(10, 9))