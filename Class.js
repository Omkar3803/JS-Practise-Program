// Class Declaration: To declare a class, use a keyword "Class" with the name
class Circle1 {
    constructor(radius) {
        this.radius = radius
    }
}
const circle1 = new Circle1(5)
console.log(circle1.radius)

// Class Expression: It can be unnamed or named
// unnamed
let circle2 = class {
    // radiusProp = 0
    constructor(radiusArg) {
        this.radiusProp = radiusArg
    }
}
console.log(circle2.name)
const circleObj2 = new circle2(500)
console.log(circleObj2.radiusProp)

// named
let circle3 = class Circle3 {
    constructor(radiusArg) {
        this.radiusProp = radiusArg
    }
}
console.log(circle3.name)
const circleObj3 = new circle3(5000)
console.log(circleObj3.radiusProp)