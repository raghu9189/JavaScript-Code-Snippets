function getElements(n){
    if(n == 0){
        return n;
    }
    return getElements(n--);
}

const item = getElements(10);
console.log(item);
