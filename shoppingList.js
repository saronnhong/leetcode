let shoppingList = {
    bun: 2,
    beef: 4,
    cheese: 1,
    lettuce: 10,
    tomato: 1
}

let purchases = {
    bun: 3,
    beef: 3,
    games: 1
}

let missingItems = (toBuy, bought) => {
    let missing = {};
    for (let item in toBuy) {
        console.log(item)
        if (!bought[item]) {
            missing[item] = toBuy[item];
        }
        if (bought[item] < toBuy[item]) {
            missing[item] = toBuy[item] - bought[item];
        }

    }
    return missing;
}
console.log(missingItems(shoppingList, purchases));