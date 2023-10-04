
function digitalClock() {

    var currentTime = new Date();
    var day = document.getElementById("day");
    var hrs = document.getElementById("hrs");
    var min = document.getElementById("min");
    var sec = document.getElementById("sec");

    var dayInIndex = currentTime.getDay();
    if (dayInIndex == 0) {
        day.innerHTML = "SUN";
    } else if (dayInIndex == 1) {
        day.innerHTML = "MON";
    } else if (dayInIndex == 2) {
        day.innerHTML = " TUE";
    } else if (dayInIndex == 3) {
        day.innerHTML = "WED";
    } else if (dayInIndex == 4) {
        day.innerHTML = " THU";
    } else if (dayInIndex == 5) {
        day.innerHTML = "FRI";
    } else {
        day.innerHTML = "SAT";
    }
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    hrs.innerHTML =hours < 10 ? '0' + hours : hours;
    min.innerHTML = minutes < 10 ? '0' + minutes : minutes;
    sec.innerHTML = seconds < 10 ? '0' + seconds : seconds;
}
setInterval(digitalClock,1000);