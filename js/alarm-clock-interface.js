var Alarm = require('./../js/alarm-clock.js').alarmModule;



// var intervalId = window.setInterval(alarm.checkAlarm, 1000);
// var interval2Id = window.setInterval(alarm.currentTime, 1000);

$(document).ready(function(){
  var alarm = new Alarm();
  alarm.currentTime();
  $('#set-alarm').submit(function(event) {
    alarm.alarmTime = $("input#alarm-time").val();
    event.preventDefault();
    console.log(alarm.alarmTime);
    $('#userAlarm').text(alarm.alarmTime);
    alarm.checkAlarm();
  });
});
