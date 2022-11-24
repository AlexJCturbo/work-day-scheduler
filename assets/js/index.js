var scheduleTasks = {
  allSchedule: []
};

//Adding date and time to the header
function dateTimeHeader() {
  $(this).ready(function () {
    $('#currentDateTime').text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
  });
}

//Save a task to the local storage
$('.saveBtn').on('click', function () {
  var inputHour = $(this).siblings('.scheduleHours').attr('id');
  var inputTask = $(this).siblings('.taskText').val();

  if (inputTask) {
    scheduleTasks.allSchedule.push({
      hour: inputHour,
      text: inputTask
    })
  }
  console.log(scheduleTasks)
  localStorage.setItem('scheduleTasks', JSON.stringify(scheduleTasks))
})

//Load saved tasks
var loadScheduleTasks = function () {
  tasksToLoad = JSON.parse(localStorage.getItem('scheduleTasks'));
  //console.log(tasksToLoad);

  $.each(tasksToLoad, function (list, arr) {
    //console.log(list, arr);
    arr.forEach(function (task) {
      loadRecords(task.hour, task.text, list);
      //console.log(task.hour, task.text, list)
    });
  });
};

var loadRecords = function (entryHour, entryText) {
  $("#" + entryHour).siblings('.taskText').text(entryText);
}



loadScheduleTasks();
setTaskColour()
setInterval(dateTimeHeader, 1000);
