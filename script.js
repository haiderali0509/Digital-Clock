const todayDate = new Date();
let currentHour = Number(todayDate.getHours());
let currentMinute = Number(todayDate.getMinutes());
let currentSecond = Number(todayDate.getSeconds());
let outputHourElement = document.getElementById("outputHour");
let outputMinuteElement = document.getElementById("outputMinute");
let outputSecondElement = document.getElementById("outputSecond");

outputHourElement.innerHTML=FormatTime(currentHour);
outputMinuteElement.innerHTML = FormatTime(currentMinute);
outputSecondElement.innerHTML = FormatTime(currentSecond);

let countId = setInterval(myClock, 1000);
function myClock() {
    currentSecond++;
    if(currentSecond == 60) {
        currentSecond = 0;
        currentMinute++;
        if (currentMinute == 60) {
            currentMinute = 0;
            currentHour++;
        }
        outputMinuteElement.innerHTML = FormatTime(currentMinute);
    }
    outputSecondElement.innerHTML = FormatTime(currentSecond);
    if (currentHour == 24) {
        currentHour = 0;
    }
    outputHourElement.innerHTML = FormatTime(currentHour);
}
function FormatTime(time) {
    let formatedTime;
    if(time < 10) {
        formatedTime = "0" + time.toString();
    }
    else {
        formatedTime = time.toString();
    }
    return formatedTime;
}