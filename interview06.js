
// highly focus on callback hell
// how call back function work 

function add (a,b,cb){
    let res = a+b;
    cb(res)
};

add(3,4,(res)=>{
    console.log(res)
})


// console.log({}==={})