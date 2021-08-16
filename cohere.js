// function solution(N) {
//     let arrN = Array.from(String(N));
//     let max= Number.NEGATIVE_INFINITY;

//     for (let i = 0; i < arrN.length; i++) {
//         if (arrN[i] == 5) {
//             arrN.splice(i, 1);
//             let tempNum = Number(arrN.join(''));
//             if (tempNum > max) {
//                 max = tempNum;
//             }
//             arrN.splice(i, 0, "5");
//         }
//     }
//     return max
// }

// console.log(solution(-13525));
// console.log(solution(13525));

function solution(S) {
    
    let num = Number(parseInt(S, 2).toString(10));
    let count = 0
    while (num != 0) {
        if (num % 2 === 1) {
            num = num - 1;
        } else {
            num = num / 2;
        }
        count++;
    }
    return count;
}
console.log(solution('11100'))