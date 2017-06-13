$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var answers = [($("input#color").val()),($("input#food").val()),($("input#animal").val()), ($("input#place").val()), ($("input#word").val())];

    var grabs = [];
    grabs.push(answers[1], answers[0], answers[2]);
    $(".here").text(grabs[0]);
    $(".here2").text(grabs[1]);
    $(".here3").text(grabs[2]);
    $(".bottom").show();



  });
});
