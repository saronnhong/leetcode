let wordWrap = (text, maxLine) => {
    let textArr = text.split(" ");
    let newArr = [];

    for (let i = 0; i < textArr.length; i++) {
        let currMax = 0;
        let tempArr = [];
        tempArr.push(textArr[i]);
        currMax += textArr[i].length;
        for (let j = i + 1; j < textArr.length; j++) {
            if ((currMax + textArr[j].length) <= maxLine) {
                tempArr.push(textArr[j]);
                currMax += textArr[j].length + 1;
            } else {
                i = j - 1;
                break
            }
        }
        newArr.push(tempArr.join(" "));
    }
    return newArr
}
let sentence01 = "Hello my name is Saron. Where do I go to the bathroom?";
let sentence02 = "I am a Computer Science graduate with experience in the aerospace, medical, education, and tech industries. Having graduated from Caltech, I have a deep background in the sciences. I love exploring new problems and learning different ways to approach those problems."
console.log(wordWrap(sentence02, 10));