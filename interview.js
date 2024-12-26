function add(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const ca = add();
console.log(ca()); // 1
console.log(ca()); // 2
console.log(ca()); // 3it'