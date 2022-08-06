console.log("Sum of all numbers till n");

var m = prompt("Input the value of n: ")

n = parseInt(m)

for (var sum = 0; n>0; n=n-1){
    sum = sum + n
    console.log("Sum: " + sum);
}

