function makeCounter(){
    let count = 0;
    
    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
        reset() {
            count = 0;
            return count;
        },
        // getCount() {
        //     return count;
        // }
    };
}

const s = makeCounter();
console.log(s.increment())
console.log(s.increment())
console.log(s.increment())