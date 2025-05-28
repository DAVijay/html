const anynum = require('./randomNum')
const greet = require('./gm')
const maths = require('./maths')

console.log("In Any :" , anynum())
console.log("Call greet :" , greet('Vijay'))
console.log("Addition 2 + 3 = ", maths.add(2, 3))
console.log("Multiplication 2 * 3 = ", maths.mult(2, 3))