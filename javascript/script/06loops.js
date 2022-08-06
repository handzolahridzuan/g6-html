console.log("Loops");

var tableNumber = 15
var count = 1
while (count <= 10) {
    console.log(tableNumber + " x " + count + " = " + tableNumber);
    count++
}

var star = prompt("Type single character: ")
var rowsCount = prompt("Type number: ")


var counter  = 0

var message1 = " " + star + " "
var message2 = ""
while(counter < rowsCount){
    message2 = message2 + message1
    console.log(message2)
    //counter++
    counter=counter+1

} 



