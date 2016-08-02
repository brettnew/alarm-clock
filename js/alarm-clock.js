function Alarm() {
  this.time = moment().format("HH:mm");
}

Alarm.prototype.checkAlarm = function() {
  if (this.time === this.alarmTime) {
    var alarmSound = new Audio('audio/alarm.wav');
    alarmSound.play();
    setInterval(this.currentTime, 1000);
  }
};

Alarm.prototype.currentTime = function() {
  this.time = moment().format("HH:mm");
  $('#time').text(this.time);
  setInterval(this.currentTime, 1000);
};

exports.alarmModule = Alarm;
