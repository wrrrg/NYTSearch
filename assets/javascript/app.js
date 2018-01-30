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

  // Built by LucyBot. www.lucybot.com
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url += '?' + $.param({
    'api-key': "b38d659d279a4ed49adb8f10819b6ce8",
    'q': searchTerm
  });
  $.ajax({
    url: url,
    method: 'GET',
  }).done(function(result) {
    console.log(result);
    // Get the "docs" array
    var docs = result.response.docs;
    console.log(docs);


    for (var i = 0; i < recordsLimit; i++){
      // Get the headline/author/resultnumber
      var headline = docs[i]["headline"]["main"];
      console.log(headline);
      var author = docs[i]["byline"]["original"];
      console.log(author);
      var articleURL = docs[i]["web_url"];
      console.log(articleURL);


      var articleDiv = $("<li><div class='article'>");
      var fullHeadline = $("<a><h2>").text(headline).addClass('article-headline');
      fullHeadline.attr("href", articleURL);
      var byline = $("<p>").text(author).addClass('article-byline');

      articleDiv.append(fullHeadline);
      articleDiv.append(byline);

      $("#results-appear-here").append(articleDiv);

    };

  }).fail(function(err) {
    throw err;
  });


});


// Clear the "results" div
$("#clear-button").on("click", function() {
  $("#results-appear-here").empty();
})
});
