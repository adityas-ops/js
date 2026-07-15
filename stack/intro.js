var MyStack = function() {
   let arr = [];
   this.arr = arr;
};


MyStack.prototype.push = function(x) {
    this.arr.push(x);
};

MyStack.prototype.pop = function() {
        return this.arr.pop()
};


MyStack.prototype.top = function() {
    return this.arr[this.arr.length-1]
};


MyStack.prototype.empty = function() {
    return this.arr.length > 0 ? false:true
};


let s = new MyStack()
s.push(5)
console.log(s.pop())
s.push(5)
console.log(s.top())
console.log(s.empty())