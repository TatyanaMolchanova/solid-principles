// Open Close Principle
// Class have to be open for expansion but closed for modification
// It means if we create something new we didn't change an old code

// 1. This example violates Open Close Principle:
// class Square {
//     constructor(size) {
//         this.type = 'square'
//         this.size = size
//     }
// }
//
// class Circle {
//     constructor(radius) {
//         this.type = 'circle'
//         this.radius = radius
//     }
// }
//
// // If a customer wish then add Rectangle
// class Rect {
//     constructor(width, height) {
//         this.type = 'rect'
//         this.width = width
//         this.height = height
//     }
// }
//
// console.log(new Square(5));
// console.log(new Circle(5));
//
// class AreaCalculator {
//     constructor(shapes = []) {
//         this.shapes = shapes
//     }
//
//     sum() {
//         // If we want to add Rect area calculations we have to
//         // violate Open Close Principle because Rect have 2 parameters
//         // not 1 as Square and Circle
//         // - we have to change this existing code:
//         return this.shapes.reduce((acc, shape) => {
//             if (shape.type === 'circle') {
//                 acc += (shape.radius ** 2) * Math.PI
//             } else if (shape.type === 'square') {
//                 acc += shape.size ** 2
//             } else if (shape.type === 'rect') {
//                 acc += shape.width + shape.height
//             }
//
//             // If a customer will want to add 200 more figures
//             // we have to modified this code 200 times. It's awful
//
//             return acc
//         }, 0)
//     }
// }
//
// const calc = new AreaCalculator([
//     new Square(10),
//     new Circle(1),
//     new Circle(5),
//     new Rect(5,10)
// ])
//
// console.log(calc.sum());

// 2. This example corresponds to Open Close Principle:
// We have to realize 1 base class from which there will be
// daughter classes
class Shape {
    area() {
        throw new Error('Area method should be implemented')
    }
}

class Square extends Shape {
    constructor(size) {
        super()
        this.size = size
    }
// Realization of area calculation is in every class in area() method
    area() {
        return this.size ** 2
    }
}

class Circle extends Shape {
    constructor(radius) {
        super()
        this.radius = radius
    }

    area() {
        return (this.radius ** 2) * Math.PI
    }
}

// If a customer wish then add Rectangle
class Rect extends Shape {
    constructor(width, height) {
        super()
        this.width = width
        this.height = height
    }

    area() {
        return this.width + this.height
    }
}

// When customer wants to add one more figure - there's no problem at all!:
class Triangle extends Shape {
    constructor(a, b) {
        super()
        this.a = a
        this.b = b
    }

    area() {
        return (this.a * this.b) / 2
    }
}

class AreaCalculator {
    constructor(shapes = []) {
        this.shapes = shapes
    }

    sum() {
        // So as every class have his area ready we just:
        return this.shapes.reduce((acc, shape) => {
            acc += shape.area()
            return acc
        }, 0)
    }
}

const calc = new AreaCalculator([
    new Square(10),
    new Circle(1),
    new Circle(5),
    new Rect(10,20),
    new Triangle(10, 15)

])

console.log(calc.sum());