let data = {
    value: 93,
    cats: {
        value: 40,
        black: {
            value: 10
        },
        stripe: {
            value: 30
        }
    },
    dogs: {
        value: 55,
        big: {
            value: 33
        },
        small: {
            value: 20,
            yellow: {
                value: 3,
                kitchen: {
                    value: 66
                }
            }
        }
    }
}

let animalJson = (level) => {
    let queue = [];

    let traverse = (currData, currLevel, name) => {
        if (level === currLevel) {
            return queue.push(name + " " + currData.value);
        }

        for (let item in currData) {
            if (item !== 'value') {
                traverse(currData[item], currLevel + 1, item);
            }
        }
    }
    traverse(data, 0, "");
    return queue;
}
console.log(animalJson(0));
console.log(animalJson(1));
console.log(animalJson(2));
console.log(animalJson(3));