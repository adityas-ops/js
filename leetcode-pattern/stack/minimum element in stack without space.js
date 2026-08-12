
let arr = [18,19,29,15,16,15];

// implement with o(n) space
function minStack(){
     let s = [];
    this.s = s;   
    let mini = -1;
    this.mini = mini
}

minStack.prototype.push =  function(a){
  if(this.s.length === 0){
    this.s.push(a);
    this.mini = a;
  }else{
    if( a >= this.mini){
        this.s.push(a);
    }else{
        let x = 2*a-this.mini;
         this.mini = a;
         this.s.push(x);
    }
  }
}


minStack.prototype.pop = function(){
    if(this.s.length === 0) return -1;
    if(this.s[this.s.length-1] >= this.mini){
        this.s.pop();
    }else{
        let newMini = 2 * this.mini - this.s[this.s.length-1]
        this.mini = newMini;
        this.s.pop()
    }

}

minStack.prototype.getMin = function(){
    if(this.s.length === 0) return -1;
    return this.mini
}

let st = new minStack();
for(const a of arr){
    st.push(a)
}

st.pop()
st.pop()
st.pop()
// st.pop()


console.log(st.getMin())


// we can use array of objects and use as first value and second as minimum value 