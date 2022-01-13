let test = (arr) => {
    let f1 = [];
    for (let h = 0; h < arr.length; h++) {
        f1 = arr.filter(el => el !== null)
    }
    return f1;
}

let input = [null, null];
let input2 = [{ title: "ayemi" }, null, null, 2,3]

console.log(test(input2));