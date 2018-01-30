$(document).ready(function() {
  // Save values from Search Field
$("#search-button").on("click", function() {
  var searchTerm = $("#search-term").val();
  var recordsLimit = $("#records-limit").val();
  var startYear = $("#start-year").val();
  var endYear = $("#end-year").val();

  console.log(searchTerm);
  console.log(recordsLimit);
  console.log(startYear);
  console.log(endYear);
});


// Clear the "results" div
$("#clear-button").on("click", function() {
  $("#results-appear-here").empty();
})
});
