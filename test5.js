let assigment = [
    {
        pharmacy: {
            name: "rite aid"
        },
        orderItems: {
            drug: "advil",
            quantity: 10
        }
    },
    {
        pharmacy: {
            name: "cvs"
        },
        orderItems: {
            drug: "tylenol",
            quantity: 9
        }
    }
]
console.log(assigment.findIndex(res => res.pharmacy.name === "cvs"))

if (1000000 < Number.POSITIVE_INFINITY) {
    console.log("yes")
}

//keep track of best prices for each orderItem
            //1. if not in bestPrices yet, add it to bestPrices and add to pharmOrder
            //2. if new price is less than bestPrice[drug], update in bestPrices and update in pharmOrder
            //3. before adding to pharmOrder, check if that pharmacy is there already, if it is, add to the exisiting orderItems instead of making a new one
            //4. use assigment.findIndex(res => res.pharmacy.name === "cvs") to find index of the pharmacy or keep track of it elsewhere