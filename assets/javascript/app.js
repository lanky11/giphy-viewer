

// Variables
//===========================================================================================

var apiKey = "mJ6YiwAKwAYk4h496ybr2uLF4xCC5tSK";


var searchTerm = $(".search-input").val().trim();
console.log(searchTerm);

//var queryURL = "http://api.giphy.com/v1/gifs/search" + "?q=" + searchTerm +  "&api_key=" + apiKey;
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";

// Array to hold buttons
var gifArray = ["frog", "fish", "dog", "cat"];



// Loop through the gifArray and display buttons on screen
for(var i=0; i<gifArray.length; i++) {
    console.log(gifArray[i]);
}


// Query GIPHY API
$.ajax({
  url: "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC",
  method: 'GET'
}).done(function(response) {
  console.log(response);
});




// On click event of the submit button
$(".submit-gif").on("click", function(event) {
   
   event.preventDefault();
   console.log("Inside of the on click");
   
   
   
    
});





