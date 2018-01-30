$(document).ready(function() {
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
});
