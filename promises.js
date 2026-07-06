

// promse.all
let p1 =  Promise.resolve("p1")
let p2 = Promise.resolve("p2")
let p3 = Promise.reject("p3")

let p =  Promise.all([p1,p2,p3]).then((res)=>console.log(res)).catch((err)=>console.log("promises are failed",err)).finally(()=>console.log("finally"))

// console.log('all cases',p)


// promise.allSettled

let a = Promise.resolve("promise->a")
let b = Promise.resolve("promise-b")
let c = Promise.reject("promise-c")

let pp = Promise.allSettled([a,b,c]).then((res)=>res.map((item)=>console.log(`${item.value}-> ${item.status}`))).catch((err)=>console.log("got stuck in catch",err))
