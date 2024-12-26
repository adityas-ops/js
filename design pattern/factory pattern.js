// creating factory pattern design

//        return Example.instance;

// what is factory design pattern
// factory design pattern is a creational pattern that is used to create objects of a class without exposing the creation logic to the client
// factory design pattern is used when we want to create objects of a class without exposing the creation logic to the client

// example 1 where we create a factory design pattern for a company which have two types of employees
// 1. developer 2. tester

class developer {
    constructor(name) {
        this.name = name;
        this.type = "developer";
    }
}

class tester {
    constructor(name) {
        this.name = name;
        this.type = "tester";
    }
}

class EmployeeFactory {
    constructor() {
        this.create = (name, type) => {
            switch (type) {
                case 1:
                    return new developer(name);
                    break;
                case 2:
                    return new tester(name);
                    break;
            }
        };
    }
}

let factory = new EmployeeFactory();
let employees = [];

employees.push(factory.create("John", 1));
employees.push(factory.create("Doe", 2));

console.log(employees);