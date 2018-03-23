// API key linked to page
// Create variables for search terms, number of records, start year, and end year
// Drop down box for number of records
    // limit number of articles
// button for search and clear results

// Do preliminary research on the [API](http://developer.nytimes.com/article_search_v2.json).
// Register for an API Key.
// Understand what format the URL should look like to make an Article Call. (Hint: Use the API Console!!)
// Experiment with console logging various fields.
// Create the AJAX call needed to retrieve data then console.log all of the relevant fields.
// Incorporate various “optional parameters” (hard code these in initially).
// Take note of various “bugs” that appear with certain searches.

var search = [];
var records = [];
var startYear = [];
var endYear = [];
var APIkey = "1fb146a3913f44919d26b45822fa57ae";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIkey;

// "https://api.nytimes.com/svc/archive/v1/2018/1.json"

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

console.log(queryURL);
console.log(response);

if ()
  });