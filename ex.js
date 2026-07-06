
// async function run (){
//     console.log(1)

//     await console.log(2)
//     console.log(3)

// }


// run()

async function test() {
await Promise.reject("Failed");
}
test();