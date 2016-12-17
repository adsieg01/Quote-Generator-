// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
// Quotes to be randomly generated
var quotes = [
	{	
		key: "Quote One",
		quote: "Love what you do and do what you love. Don't listen to anyone else who tells you not to do it. You do what you want, what you love. Imagination should be the center of your life.",
		source: "Ray Bradbury",
		citation: "http://www.goodreads.com/quotes/tag/follow-your-dreams",
		year: "Unknown"
	}, 
	{
		key: "Quote Two",
		quote: "",
		source: "",
		citation: "",
		year: ""
	},
	{
		key: "Quote Three",
		quote: "",
		source: "",
		citation: "",
		year: ""
	},
	{
		key: "Quote Four",
		quote: "",
		source: "",
		citation: "",
		year: ""
	},
	{
		key: "Quote Five",
		quote: "",
		source: "",
		citation: "",
		year: ""
	}
];

// Pulls a random quote to be displayed

function getRandomQuote () {
	var randomNumber = Math.floor(Math.random() * quotes.length);
	var selectedQuote = quotes[randomNumber].quote;
	return selectedQuote; 
	}



	 

// Displays Properties of the choosen quote

function printQuote () {
	var postedQuote = getRandomQuote(); 
	var info;
	info += '<p class ="quote">' + postedQuote.quote  + '</p>';
  info += '<p class ="source">' + postedQuote.source  + '</p>';
  document.getElementById('quote-box').innerHTML = info;
}






























