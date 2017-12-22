
// Array to hold buttons
var gifArray = ["frog", "fish", "dog", "cat"];


// Adding and updating gif buttons
//==================================================================================================

// Creates a gif button
function createButton() {
  
  // remove gifs from page
  $(".gif-display").empty();
  $(".gif-button-display").empty();
  
  // Loop to create buttons
  for(var j=0; j<gifArray.length; j++) {
    console.log(gifArray[j]);
    
    // create button, add text, a class, an attrabute and append to div
    var gifButton = $("<button>").text(gifArray[j]);
    gifButton.addClass("btn btn-success m-1");
    gifButton.attr("data-button", gifArray[j]);
    $(".gif-button-display").append(gifButton);
  }
}

// On click event to add new button to favorite gif buttons
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


// Display Gifs
//==================================================================================================

// On click fuction that displays the gifs depending on the button that is clicked
$(".gif-display").on("click", function(event) {
  
  var searchTerm = $(this).attr("data-button");
  console.log(searchTerm);
  
  var apiKey = "mJ6YiwAKwAYk4h496ybr2uLF4xCC5tSK";
   
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + "dog" +  "&api_key=" + apiKey;


  // Query GIPHY API
  $.ajax({
    url: queryURL,
    method: 'GET'
  }).done(function(response) {
    console.log(response);
    
  // Loop through the results of the response and return gifs
  for(var i=0; i<response.data.length; i++) {
      console.log(response.data[i].url);
      var imageDiv = $("<div>");
      imageDiv.html("<img>").attr("src", response.data[i].url);
      
  }
    
  });
  
  
});






//==================================================================================================

