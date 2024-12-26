
// in this file we create a simple example of singleton design pattern


// singleton design pattern is a creational design pattern that restricts the instantiation of a class to one object

// singleton design pattern is used when we want to make sure that only one instance of a class is created

// singleton design pattern is used when we want to provide a global point of access to the object

// singleton design pattern is used when we want to control the access to the object

// singleton design pattern is used when we want to reduce the overhead of creating a new instance of the object


var singleTop = new function(){
    var instance = this;
    this.name = '';
    this.age = '';
    this.display = function(){
        console.log('Name: '+instance.name+' Age: '+instance.age);
    }
}

singleTop.name = 'John';
singleTop.age = 30;
singleTop.display(); // Name: John Age: 30

// in this example we create a singleton object singleTop and we create a new instance of the object and assign it to the variable instance
// we then create the properties name and age and assign values to them
// we then create a method display that displays the name and age of the object
// we then assign values to the name and age properties of the object
// we then call the display method of the object
// the output will be Name: John Age: 30
// now we cannot reassign the instance variable to a new object because it is a singleton object
// this is an example of a singleton design pattern

// new method to create singleton object

var singleTop = (function(){
    var instance;
    function createInstance(){
        var object = new Object('John');
        return object;
    }
    return {
        getInstance: function(){
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
}
)();

var instance1 = singleTop.getInstance();
var instance2 = singleTop.getInstance();

// console.log(instance1 === instance2); // true



class Example {
    static instance = null;
    static data = null; // `null` indicates that data is uninitialized

    constructor() {
        if (!Example.instance) {
            Example.instance = this;
        }
        return Example.instance;
    }

    setData(data) {
        if (Example.data === null) { // Allow setting data only if it hasn't been initialized
            Example.data = data;
        } else {
              console.error("Data is already set and cannot be overwritten.");
        }
    }

    getData() {
        return Example.data;
    }
}

const ex = new Example();
const ex2 = new Example();

ex.setData(10);
console.log(ex.getData()); // 10
console.log(ex2.getData()); // 10
console.log(ex === ex2); // true

ex2.setData(20); // This will not overwrite the value
console.log("ex2",ex.getData()); // 10
console.log(ex2.getData()); // 10



