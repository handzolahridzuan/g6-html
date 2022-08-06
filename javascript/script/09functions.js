console.log("Functions")

function welcome(){
    console.log("--------Start Message-------")
    console.log("Welcome to JS")
    console.log("JS is easy")
    console.log("Anyone can learn JS!")
    console.log("I am learning functions in JS!")
    console.log("--------End Message-------");
}

welcome()
// welcome()
// welcome()
// welcome()

//devName is going to receive the parameter which will
//be passed when welcomeName function is called
var devName = "hello"
console.log("Before function definition: " + devName)
function welcomeMessage(devName){
    console.log("Inside function: " + devName)
    devName = "OMG"
    console.log(devName + ", Welcome to JS.")
}
console.log("After function definition: " + devName)

devName = "OBB"
console.log("Before function call: " + devName)
welcomeMessage(devName)
console.log("After function call: " + devName)
//name is function parameter

//n is parameter which will receive the value 
//from the function call
function sumOfAllNumbersTIllN(n){

    for (var sum = 0; n>0; n=n-1){
        sum = sum + n
        //console.log(sum)
    }
    
    console.log("Sum: " + sum)
}

sumOfAllNumbersTIllN(10000)
sumOfAllNumbersTIllN(1000)
sumOfAllNumbersTIllN(100)
sumOfAllNumbersTIllN(10)
sumOfAllNumbersTIllN(5)

function welcomeReturn(message) {
    // console.log("Hello, " + message)
    return "Hello, "  + message +" the message is received and saved."
}

var whatIsReturned = welcomeReturn("Safiyyah")
console.log(whatIsReturned)

function randomnumber(output){
    var count = output
    for (let index = 0; index < count; index++) {
        console.log(Math.trunc(Math.random()*100))
}
}

var RandomNumberOutput = randomnumber(5)
console.log(RandomNumberOutput)