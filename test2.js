let hashLoop = () => {

    let hash = {
        hello: 1,
        bye: 2
    }
    let hash1=[1,2,3];
    // for( let key in hash ){
    //     console.log(key);
    //     console.log(hash[key]);
    // }
    hash1.forEach((key) => {
        console.log(key);
    })
}

hashLoop();