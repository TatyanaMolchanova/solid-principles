// Interface segregation Principle

// // 1. Incorrect realization:
// class Animal {
//     constructor(name) {
//         this.name = name
//     }
//
//     walk() {
//         console.log(`${this.name} can walk`)
//     }
//
//     swim() {
//         console.log(`${this.name} can swim`)
//     }
//
//     fly() {
//         console.log(`${this.name} can fly`)
//     }
// }
//
// class Dog extends Animal {
//     fly() {
//         return null
//     }
// }
//
// class Eagle extends Animal {
//     swim() {
//         return null
//     }
// }
//
// class Whale extends Animal {
//     fly() {
//         return null
//     }
//
//     walk() {
//         return null
//     }
// }
//
// const dog = new Dog('Rex')
// dog.walk()
// dog.swim()
// dog.fly()
//
// const eagle = new Eagle('Eagle')
// eagle.walk()
// eagle.swim()
// eagle.fly()
//
// const whale = new Whale('Whale')
// whale.walk()
// whale.swim()
// whale.fly()


// 2. Correct realization of Interface Segregation Principle:
// This is a right architecture of app. It's how Vue is working
class Animal {
    constructor(name) {
        this.name = name
    }
}
// we didn't describe methods in the base class now

const swimmer = {
    swim() {
        console.log(`${this.name} can swim`)
    }
}

const walker = {
    walk() {
        console.log(`${this.name} can walk`)
    }
}

const flyer = {
    fly() {
        console.log(`${this.name} can fly`)
    }
}

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, swimmer, walker)
Object.assign(Eagle.prototype, flyer, walker)
Object.assign(Whale.prototype, swimmer)

const dog = new Dog('Rex')
dog.walk()
dog.swim()

const eagle = new Eagle('Eagle')
eagle.walk()
eagle.fly()

const whale = new Whale('Whale')
whale.swim()