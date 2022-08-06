console.log("Math functions!")

//in JS everything is object
//object will always have methods and properties
//present1 is an instance of the Date object
// var present1 = new Date()
// var present2 = new Date()
// var score = 88

console.log(Math.PI)
console.log(Math.SQRT2)
console.log(Math.E)

//number just less than the decimal number (in parameter)
console.log(Math.floor(6.9))

//number just more than the decimal number (in parameter)
console.log(Math.ceil(6.1))

//strips of all digits in decimals
console.log(Math.trunc(5.684166541))

//returns the random number between 0 and 1
console.log(Math.random())

//try to print 5 random numbers in the loop
var count = 15
for (let index = 0; index < count; index++) {
    console.log((Math.random())*100)
}

var count = 5
for (let index = 0; index < count; index++) {
    console.log(Math.trunc(Math.random()*100))
}