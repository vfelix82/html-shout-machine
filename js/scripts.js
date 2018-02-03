$(document).ready(function() {
  $("#formNormalText").submit(function(event) {
    $("p#resultsText").text();
    var textSubmit = $("#inputShout").val();
    var shout = textSubmit.toUpperCase();
    $(".resultShout").text(shout);
    $(".resultShout").show();
    event.preventDefault();

  });
});
