var reverseBits = function (n) {
    let result = 0;
    let count = 32;

    while (count--) {
        result *= 2;
        result += n & 1;
        n = n >> 1;
    }
    return result;

};

console.log(reverseBits(8));

var countOnesInBits = function (n) {
    let count = 32;
    let sum = 0;
    while (count--) {
        if ((n & 1) === 1) {
            sum++;
        }
        n = n >> 1;
    }
    return sum
}