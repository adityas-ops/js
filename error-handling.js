
// when error occur although finally block code executes

try {
    let res = someVariable()+5;
    console.log(res)
} catch (error) {
   console.log('error block',error)
    
}finally{
  console.log('finally block when error occur')
}

// when error not occur yet finally block code executes
try {
   let res = 5+5;
   console.log('res',res) 
} catch (error) {
    console.log('error block',error)    
}finally{
console.log("finally block after error not occur ")
}

// use of throw

const getAge = (age)=>{
    if(typeof age !== 'number') throw new Error("age should be number")
    if(age <= 18) throw new Error("age should be 18+")
     return age;
}

try {
    console.log(getAge(20))
} catch (error) {
    console.log('error',error)
}