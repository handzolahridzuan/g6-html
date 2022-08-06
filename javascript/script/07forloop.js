console.log("for loop")

var tableFor = prompt("Input number only for table: ")
console.log("Print table of: " + tableFor);

var i = 1
while(i <= 10){
    var message = tableFor +
     " x " + i + " = "
    console.log(message + (tableFor * i))
    i++
}

for (var j=1; j<=10; j=j+1){
    var message = tableFor + " x " + j + " = "
    console.log(message + (tableFor*j));
}