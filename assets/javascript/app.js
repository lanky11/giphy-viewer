
// Array to hold buttons
//==================================================================================================

var gifArray = ["lebron james", "kobe bryant", "charles barkley", "david robinson", "hakeem olajuwon", "james harden", "russell westbrook"];


// Create a gif button
//==================================================================================================

function createButton() {
  
  // remove gifs from page
  $(".gif-button-display").empty();
  
  // Loop to create buttons
  for(var j=0; j<gifArray.length; j++) {
    console.log(gifArray[j]);
    
    // create button, add text, a class, an attrabute and append to div
    var gifButton = $("<button>").text(gifArray[j]);
    gifButton.addClass("btn btn-success m-1 gif");
    gifButton.attr("data-button", gifArray[j]);
    $(".gif-button-display").append(gifButton);
  }
}


// Add new button to favorite gif buttons
//==================================================================================================

$(".submit-gif").on("click", function(event) {
   
  event.preventDefault();
  
  var searchTerm = $(".search-input").val().trim();
  console.log(searchTerm);
  
  // Validate that the user enters a non empty string.
  if (searchTerm == "") {
    alert("Please enter a valid search term.");
  } else {
    // push the input from the input field into the gif array
    gifArray.push(searchTerm);
    console.log(gifArray);
    // call function to generate button
    createButton();
  }
});

// call function to generate inital buttons
createButton();


// Display gifs when a gif button is clicked
//==================================================================================================

function displayGifs() {
  
  // clear gifs from last button click
  $(".gif-display").empty();
  
  var searchTerm = $(this).attr("data-button");
  
  var apiKey = "&api_key=" + "mJ6YiwAKwAYk4h496ybr2uLF4xCC5tSK";
   
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + apiKey;
  

  // Query GIPHY API
  $.ajax({
    url: queryURL,
    method: 'GET'
  }).done(function(response) {
    console.log(response);
    
    // Loop through the results of the response and return gifs
    for(var i=0; i<response.data.length; i++) {

      // created div to hold gif and rating
      var gifDiv = $("<div>");
      // add class to div
      gifDiv.addClass("gif-div");
      // created rating
      var rating = $("<p>").text("Rating: " + response.data[i].rating);
      
      
      // created img tag to hold gif and added a src
      var image = $("<img>").attr("src", response.data[i].images.fixed_height.url);
      // add image and rating to new div
      gifDiv.append(image, rating);
      // add div to page
      $(".gif-display").prepend(gifDiv);
      
    }
    
  });
  
}


// On click fuction that displays the gifs depending on the button that is clicked
$(document).on("click", ".gif", displayGifs);




//==================================================================================================

