
setInterval(() =>{
const result = document.querySelector("#result")
const currentTime = Date.now(); //timestamp (milisecond mai)
const olympicTime = new Date(2028, 6, 14).getTime();

let timeZone = olympicTime - currentTime;
console.log(timeZone);

let day = Math.floor((timeZone) / (1000 * 60 * 60 * 24))
timeZone %= 1000 * 60 * 60 * 24;

let hour = Math.floor((timeZone) / (1000 * 60 * 60))
timeZone %= 1000 * 60 * 60;

let minute = Math.floor((timeZone) / (1000 * 60))
timeZone %= 1000 * 60;

let second = Math.floor((timeZone) / (1000))
timeZone %= 1000;

result.textContent = `Days:${day}|hours:${hour}|Minutes:${minute}|Seconds:${second}`

},1000)

