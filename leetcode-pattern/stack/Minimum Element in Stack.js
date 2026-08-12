
let arr = [18,19,29,15,16];

// implement with o(n) space
function minStack(arr){
     let s = [];
    let ss  = [];
    this.s = s;
    this.ss = ss;
   
}

minStack.prototype.push = function(a){
    this.s.push(a); 
    if(this.ss.length === 0 || this.ss[this.ss.length-1] >= a){
        this.ss.push(a)
    }
}
minStack.prototype.pop = function(){
    if( this.s.length === 0) return -1;
    let ans = this.s.pop();
    if(ans === this.ss[this.ss.length-1]){
        this.ss.pop()
    }
    return ans;
}

minStack.prototype.getMin = function(){
    if(this.ss.length === 0) return -1
    return this.ss[this.ss.length-1]
}


let minStacks = new minStack();
for(const a of arr){
    minStacks.push(a)
}

console.log('====================================');
console.log(minStacks.getMin());
console.log('====================================');