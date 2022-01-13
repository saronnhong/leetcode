const onFirstInputChange = (ev) => {

    let tempStore = data;
    setFirstSearch(ev.target.value);
    let searchValue = firstSearch;

    let traverse = (node) => {
      if (node === null) return null;
      if (node.title.toLowerCase().includes(searchValue)) return node;
      if (node.children === null && node.title.toLowerCase().includes(searchValue) === false) {
        return null;
      }

      if (node.children !== null && node.children.length > 0) {
        for (let j = 0; j < node.children.length; j++) {
          node.children[j] = traverse(node.children[j])
        }
        if (node.children.every(element => element === null)) {
          node.children = null;
        }
        if (node.children === null && node.title.toLowerCase().includes(searchValue) === false) {
          node = null;
        }
      }
      return node
    }

    let arr = [];
    for (let i = 0; i < tempStore.length; i++) {
      let temp = traverse(tempStore[i]);
      arr.push(temp);
    }
    setIsTransformed(true);
    console.log("updated results", arr)
    setData(arr);
  };