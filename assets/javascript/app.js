// Array to hold buttons
//==================================================================================================

var gifArray = ["lebron james", "kobe bryant", "cat", "dog"];

// Create a gif button
//==================================================================================================

function createButton() {
  
  // remove gifs from page
  $(".gif-button-display").empty();
  
  // Loop to create buttons
  for(var j=0; j<gifArray.length; j++) {
    
    // create button, add text, a class, an attrabute and append to div
    var gifButton = $("<button>")
    gifButton.text(gifArray[j]);
    gifButton.addClass("btn btn-success m-1 gif");
    gifButton.attr("data-button", gifArray[j]);
    $(".gif-button-display").append(gifButton);
  }
}

// Add new button to favorite gif buttons
//==================================================================================================

function submitGifButton (event) {
   
  event.preventDefault();
  
  var searchTerm = $(".search-input").val().trim().toLowerCase();
  console.log(searchTerm);
  
  // Validate that the user enters a non empty string.
  if (searchTerm == "") {
    alert("Please enter a valid search term.");
  } else {
    // validates if the vlaue entered doesnt already exist
    if (gifArray.indexOf(searchTerm) === -1) {
      // push the input from the input field into the gif array
      gifArray.push(searchTerm);
      console.log(gifArray);
      // call function to generate button
      createButton();
    } else {
      alert(searchTerm + " is already a button in your favorites.  Please try something new!");
    }
  }
  
  // Clears button after submit
  $(".search-input").val("");

}

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
      // created rating paragraph
      var rating = $("<p>").text("Rating: " + response.data[i].rating);
      rating.addClass("rating-p text-center");
      // created img tag to hold still of gif and added a src
      var image = $("<img>").attr("src", response.data[i].images.fixed_height_still.url);
      // add class to image
      image.addClass("gif-img");
      // add data attributes to image tag
      image.attr("data-state", "still");
      image.attr("data-still", response.data[i].images.fixed_height_still.url);
      image.attr("data-animate", response.data[i].images.fixed_height.url);
      // add image and rating to new div
      gifDiv.append(image, rating);
      // add div to page
      $(".gif-display").prepend(gifDiv);
    }
  });
}


// function that will pause or play a gif
//==================================================================================================

function pausePlay() {
  
  var state = $(this).attr("data-state");
  console.log(this);
  console.log(state);
  
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
}

// Function call and click events
//==================================================================================================

// call function to generate inital buttons
createButton();

// Pause or Play gif
$(document).on("click", ".gif-img", pausePlay);

// Displays the gifs depending on the button that is clicked
$(document).on("click", ".gif", displayGifs);

// Add gif to list of buttons
$(".submit-gif").on("click", submitGifButton);

//==================================================================================================