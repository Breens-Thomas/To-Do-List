//user-interface logic
$(document).ready(function(event) {
  $("#form").submit(function(event) {
    event.preventDefault();

    //get the data input from ui
    var taskAdded = $("#add-task").val();
    $(".added-tasks").show()
    
    $("ul#tasks").append("<li><span class='task'>" + taskAdded+ "</span></li>")
    $(".task").click(function() {
      $(this).css("text-decoration", "line-through");
    });

    $("#add-task").val("");
  });
}); 