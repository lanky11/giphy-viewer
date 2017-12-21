
// Array to hold buttons
var gifArray = ["frog", "fish", "dog", "cat"];

for(var j=0; j<gifArray.length; j++) {
    console.log(gifArray[j]);
    
    // create button, add a class, an attrabute and append to div
    var gifButton = $("<button>").text(gifArray[j]);
    gifButton.addClass("btn btn-success m-1");
    gifButton.attr("data-button", gifArray[j]);
    $(".gif-button-display").append(gifButton);
}


// Add Gif Buttons
//==================================================================================================

// On click event to add new button to favorite gif buttons
$(".submit-gif").on("click", function(event) {
   
  event.preventDefault();
  
  var searchTerm = $(".search-input").val().trim();
  console.log(searchTerm);
  
  // Validate that the user enters a non empty string.
  if (searchTerm == "") {
    alert("Please enter something!");
  } else {
    
    // push the input from the input field into the gif array
    gifArray.push(searchTerm);
    console.log(gifArray);
  }
  


});


// Display Gifs
//==================================================================================================

// On click fuction that displays the gifs depending on the button that is clicked
$(".gif-display").on("click", function(event) {
  
  event.preventDefault();
  
  var apiKey = "mJ6YiwAKwAYk4h496ybr2uLF4xCC5tSK";
   
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm +  "&api_key=" + apiKey;
    

   
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

