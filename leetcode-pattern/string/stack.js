
class Stack{
    constructor(Stack){
        this.Stack = []
    }
    push(ele){
        this.Stack.push(ele)
    }
    isEmpty(){
        return this.Stack.length === 0
    }
    pop(){
        if(this.isEmpty()){
            return "Stack is empty"
        }
        return this.Stack.pop();
    }
    peak(){
          if(this.isEmpty()){
            return "Stack is empty"
        }
        return this.Stack[this.Stack.length-1]
    }
    size(){
          if(this.isEmpty()){
            return "Stack is empty"
        }
        return this.Stack.length
    }
    display(){
        if(this.isEmpty()){
            console.log("Stack is empty")
            return "Stack is empty"
        }
        return this.Stack
    }
}


let s = new Stack()
s.push(1)
s.push(2)
s.push(3)
s.push(4)
s.push(5)
s.push(6)
console.log(s.peak())
console.log(s.size())
console.log(s.pop())
console.log(s.display())

