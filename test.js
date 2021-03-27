let testString = "This letter is, to express my interest in the, Full Stack JavaScript Engineer position."

function toArr(str) {
    // let newstr = str.replace(/[a-n]/g, "X");
    let newstr = str.split(", ");
    return newstr;
}

console.log(toArr(testString));