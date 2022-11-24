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
      console.log(task.hour, task.text, list)
    });
  });
};

var loadRecords = function (entryHour, entryText) {
  $("#" + entryHour).siblings('.taskText').text(entryText);
}

















var index = $(this).closest(".list-group-item").index();

//Seting color depending on the hour
function setTaskColour() {
  var currentHour = moment().format("HH")
  //console.log(currentHour);

  $('.time-block .scheduleHours').each(function () {

  })

    .attr('id').val().trim();
  hourPeriod = parseInt(hourPeriod);

  var changeColours = $(this).children('.taskTaxt');
  //console.log(changeColours);
  //console.log(hourPeriod, currentHour);
  // var scheduleHour = $(this).attr("data-time");
  // scheduleHour = parseInt(scheduleHour);

  // $('.scheduleHours').each(function(){

  // })

  //$('input[name="task"]')

  // $('.scheduleHours').each(function () {
  //   var scheduleHour = $(this).attr("id").text().trim();
  //   console.log(scheduleHour)
  // });
};

//setInterval(setTaskColour, (1000 * 5));











// $('.task').sortable({
//   connectWith: $('.card .list-group'),
//   scroll: false,
//   tolerance: "pointer",
//   helper: "clone",
//   activate: function (event) {
//     $(this).addClass('dropover')
//     $('.bottom-trash').addClass('bottom-trash-drag')
//   },
//   deactivate: function (event) {
//     $(this).removeClass('dropover')
//     $('.bottom-trash').removeClass('bottom-trash-drag')
//   },
//   over: function (event) {
//     $(event.target).addClass('dropover-active')
//   },
//   out: function (event) {
//     $(event.target).removeClass('dropover-active')
//   },
// })

loadScheduleTasks();
setInterval(dateTimeHeader, 1000);