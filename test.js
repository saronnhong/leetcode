let array = [
    {
        name: "Aye",
        time: 12
    },
    {
        name: "Ann",
        time: 1
    },
    {
        name: "Alice",
        time: 4
    },
    {
        name: "Jean",
        time: 123
    },
    {
        name: "Kate",
        time: 5
    }
]
array.sort((a,b) => a.time - b.time)
console.log(array);