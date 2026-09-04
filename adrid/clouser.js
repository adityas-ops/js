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


function add(a,b){
   this.a = a;
   this.b = b;
   console.log(a+b)
}

add.prototype.showParameters = function(){
    console.log(this.a,this.b)
}

const a = new add(5,8);
// a.showParameters()