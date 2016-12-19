// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Quotes to be randomly generated

var quotes = [
	{	
		key: "Quote One",
		quote: "I learned the value of hard work by working hard.", 
		source: "Margaret Mead",
		citation: "www.brainyquote.com",
		year: "",
		tag: "History",
	}, 
	{
		key: "Quote Two",
		quote: "Nothing ever comes to one, that is worth having, except as a result of hard work.",
		source: "Booker T. Washington",
		citation: "www.brainyquote.com",
		year: "",
		tag: "History"
	},
	{
		key: "Quote Three",
		quote: "I’m a greater believer in luck, and I find the harder I work the more I have of it",
		source: "Thomas Jefferson",
		citation: "www.quotezine.com",
		year: "",
		tag: "Government"
	},
	{
		key: "Quote Four",
		quote: "Without labor nothing prospers.",
		source: "Sophocles",
		citation: "www.quotezine.com",
		year: "",
		tag: "History"
	},
	{
		key: "Quote Five",
		quote: "Dreams don’t work unless you do",
		source: "John C. Maxwell",
		citation:"",
		year: "",
		tag: "Inspirational"

	}
];

// Pulls a random quote to be displayed

function getRandomQuote () {
	var randomNumber = Math.floor(Math.random() * quotes.length);
	var selectedQuote = quotes[randomNumber];
	return selectedQuote; 
	}



	 

// Displays Availible Properties of the choosen quote

function printQuote () {
	var postedQuote = getRandomQuote ();
	var info =  "";

	  info += '<p class ="quote">' + postedQuote.quote  + '</p>';
	  info += '<p class ="source">' + postedQuote.source;
	  
	  // additonal tag property 
	  info += '<span class="tag">' + postedQuote.tag + '</span>';

      	
      	//posts citation and year only if applicable 
      	
      	if (postedQuote.citation != ""){
      	info += '<span class="citation">' + postedQuote.citation + '</span>';
 		 }
 		 if(postedQuote.year != ""){
	  	info += '<span class ="year">' + postedQuote.year  + '</span>';
		 }
  		
  		// Writes the final quote to the page
  		document.getElementById('quote-box').innerHTML = info;
}

// Change random background color of the page

	function randomColor() { 
                var hash = '#'; 
                var colors = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0','FF69B4']; 
                hash += colors[Math.floor(Math.random() * colors.length)];
                document.getElementById('bg').style.background = hash; 
            }

			document.getElementById('loadQuote').addEventListener("click",randomColor, false);

// Display every quote once before changing it


		var i = 2
		quotes.splice( i, Math.floor(Math.random() * quotes.length ))
		console.log(quotes);
	

	
// Changes the Quote and random color every four seconds
	var quoteChange = window.setInterval(printQuote, 4000);
	var colorChange = window.setInterval(randomColor, 4000);

























