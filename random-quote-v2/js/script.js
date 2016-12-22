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
		tag: "History",
	}, 
	{
		key: "Quote Two",
		quote: "Nothing ever comes to one, that is worth having, except as a result of hard work.",
		source: "Booker T. Washington",
		citation: "www.brainyquote.com",
		tag: "History"
	},
	{
		key: "Quote Three",
		quote: "I’m a greater believer in luck, and I find the harder I work the more I have of it",
		source: "Thomas Jefferson",
		citation: "www.quotezine.com",
		tag: "Government"
	},
	{
		key: "Quote Four",
		quote: "Without labor nothing prospers.",
		source: "Sophocles",
		citation: "www.quotezine.com",
		tag: "History"
	},
	{
		key: "Quote Five",
		quote: "Dreams don’t work unless you do",
		source: "John C. Maxwell",
		tag: "Inspirational"

	}
];

// variable to store used quotes 
var usedQuotes = [];

// Pulls a random quote to be displayed
function getRandomQuote () {
	
if (quotes.length === 0) {
	quotes = usedQuotes;
	usedQuotes = []; 
}

	var randomNumber = Math.floor(Math.random() * quotes.length);
	var selectedQuote = quotes[randomNumber];

// Makes sure every quote is used once
	quotes.splice(randomNumber,1);
	usedQuotes.push(selectedQuote);
	console.log(selectedQuote);

//returns selected quote 	
	return selectedQuote; 	
}




// Displays Availible Properties of the choosen quote

function printQuote () {
	var postedQuote = getRandomQuote ();
	var info =  "";

	  info += '<p class ="quote">' + postedQuote.quote  + '</p>';
	  info += '<p class ="source">' + postedQuote.source; '</p>';
	  
	  // additonal tag property 
	  info += '<span class="tag">' + postedQuote.tag + '</span>';

      	
      	//posts citation and year only if applicable 
      	
      	if (typeof postedQuote.citation != 'undefined'){
      	info += '<span class="citation">' + postedQuote.citation + '</span>';
 		 }
 		 if(typeof postedQuote.year != 'undefined'){
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

	
// Changes the Quote and random color every thirty seconds
	var quoteChange = window.setInterval(printQuote, 30000);
	var colorChange = window.setInterval(randomColor, 30000);
	


























