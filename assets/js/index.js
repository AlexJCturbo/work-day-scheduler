const daySchedule = {};

const createScheduleInput = function (timeInput, textInput, scheduleInput) {
  let scheduleLi = $('<li>').addClass('shcedule-time');
  let scheduleElement = $('<span>')
    .addClass('shcedule-text')
    .text(timeInput)
    .text(textInput)
};



var saveSchedule = function () {
  localStorage.setItem("schedule", JSON.stringify(schedule));
};