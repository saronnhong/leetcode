function numberOfItems(arr, item) {
    // Write the code that goes here
    let count = 0;
    
    let traverseArray = (array) => {  
      for(let i=0; i<array.length; i++){
        if(array[i] === item){
          count += 1;
        }
        if(Array.isArray(array[i])){
          traverseArray(array[i])
        }
      }
    }
    traverseArray(arr);
    
    return count
    
  }
  
  var arr = [
    25,
    "apple",
    ["banana", "strawberry", "apple", 25]
  ];
  console.log(numberOfItems(arr, 25));
  console.log(numberOfItems(arr, "apple"));