
//  so here we understand what is call function and how it is wokring 
//  so call method use to invoked function immedieatly and set this value inside the function 

function greet (m){
    //  m = this.m
     console.log("this is message:",this.m||m)
}


function print(){
  greet.call(this,"hello this is aditya sharma")
}

print() 