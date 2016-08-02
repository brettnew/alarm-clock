function Alarm() {
  this.time = moment().format("HH:mm")
  this.alarmSound = new Audio('audio/alarm.wav');
;
}

Alarm.prototype.checkAlarm = function() {
  if (this.time === this.alarmTime) {
    this.alarmSound.play();
    setInterval(this.currentTime, 1000);
  }
};

Alarm.prototype.currentTime = function() {
  this.time = moment().format("HH:mm");
  $('#time').text(this.time);
  setInterval(this.currentTime, 1000);
};

Alarm.prototype.snoozeFive = function() {
  this.alarmSound.pause();
  this.alarmTime += 5;
  this.checkAlarm();
};

exports.alarmModule = Alarm;
