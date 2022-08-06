console.log("Date function")

var currentDate = new Date()
console.log(currentDate)

//it will print milliseconds since epoch -> Jan 1, 1970 00:00:00:00 hrs
console.log(currentDate.getTime())
console.log(currentDate.getFullYear())
console.log(currentDate.getMonth())
console.log(currentDate.getDay())
console.log(currentDate.getHours())
console.log(currentDate.getMinutes())
console.log(currentDate.getSeconds())

var startTime = new Date().getTime()
var limit = 10000000


for (let index = 0; index < limit; index++) {
    //nothing 
    //console.log(index)
}

var endTime = new Date().getTime()
var timeTaken = endTime-startTime
console.log("Timetaken for the for-loop to finish " + limit  + " iterations: "+ timeTaken)

//in hh:mm:ss format
var displayTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds()
console.log(displayTime)

console.log(currentDate.toLocaleTimeString('jp-JP'))

console.log(currentDate.toLocaleTimeString('ko-KR'))
