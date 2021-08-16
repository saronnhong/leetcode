let reverseString = num => {
    let arr = num.split("").reverse();
    let i = 0;
    while (i < arr.length) {
        arr.splice(i, 0, " ");
        i += 4;
    }
    return arr.reverse().join("")

}
console.log(reverseString("1234500000000"))