// function abs (){

// }

// console.log(typeof abs)


const myObj = {
    abc : "aditya",
    xyz: function(){
        console.log(this.xyz)
    }
}

const xyzFunc = myObj.xyz;
myObj.xyz()
xyzFunc()