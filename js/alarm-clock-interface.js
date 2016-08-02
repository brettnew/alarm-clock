var Alarm = require('./../js/alarm-clock.js').alarmModule;

$(document).ready(function(){
  var alarm = new Alarm();
  alarm.currentTime();
  $('#set-time').click(function() {
    alarm.alarmTime = $("input#alarm-time").val();
    console.log(alarm.alarmTime);
    $('#userAlarm').text(alarm.alarmTime);
    alarm.checkAlarm();
  });

  $('#snooze-five').click(function(){
    alarm.snoozeFive();
    $('#userAlarm').text(alarm.alarmTime);
  });
});
